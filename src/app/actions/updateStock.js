"use server";

import supabase from "../supabase";

export const updateStock = async (products, el) => {
  const productToUpdate = products.find((product) => product.id === el.id);
  if (productToUpdate) {
    const updatedStock = productToUpdate.stock - el.quantity;
    await supabase
      .from("products")
      .update({ stock: updatedStock, sold: el.quantity })
      .eq("id", el.id);
  }
};
