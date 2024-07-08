"use client";
import { createContext, useState, useEffect, useContext } from "react";
import supabase from "@/app/supabase";
import { useRouter } from "next/navigation";

const AuthContext = createContext({
  handleLogin: () => {},
  signOut: () => {},
  setLogin: () => {},
  login: true,
});

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      // Check if user and user properties exist
      if (user && user.user?.id) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    }
    checkUser();
  }, []);

  //Login user with email and password
  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      setLogin(true);
    }
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      console.log("User signed up successfully:", data.user);
      setLogin(true);
      router.push("/");
    }
  };

  // Logout user
  const signOut = async () => {
    console.log("sign out");
    const { error } = await supabase.auth.signOut();
    console.log("success sign out");
    if (error) {
      console.log("error signing out");
    }
    setLogin(false);
  };

  const contextValue = {
    handleLogin,
    signOut,
    setLogin,
    login,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "No AuthContext.Provider found when calling useAuthContext."
    );
  }
  return authContext;
};
