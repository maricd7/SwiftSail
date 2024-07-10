"use server";

import supabase from "../supabase";

export const checkUser = async () => {
  const { data: user, error } = await supabase.auth.getUser();
  //   setCurrentUser(user.user?.email);
  if (error) {
    console.error("Error fetching user:", error.message);
    return;
  }
};
