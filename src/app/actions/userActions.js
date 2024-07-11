"use server";

import supabase from "../supabase";

export const checkUser = async () => {
  const { data: user, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
  return user;
};

export const getUserBoughtProducts = async (user) => {
  if (user) {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .eq("customer_id", user.id);
    if (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }
    return data;
  }
  return [];
};
