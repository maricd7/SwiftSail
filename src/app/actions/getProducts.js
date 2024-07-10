"use server";

import supabase from "../supabase";

export const fetchData = async () => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("status", true);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
