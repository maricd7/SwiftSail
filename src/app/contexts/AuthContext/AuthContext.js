"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/app/supabase";

const AuthContext = createContext({
  currentUser: null,
  handleLogin: () => {},
  signOut: () => {},
  login: false,
});

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }
      if (user) {
        setCurrentUser(user);
        setLogin(true);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error logging in:", error.message);
      return;
    }
    if (data) {
      setCurrentUser(data.user);
      setLogin(true);
      router.push("/");
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
      return;
    }
    setCurrentUser(null);
    setLogin(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleLogin, signOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
