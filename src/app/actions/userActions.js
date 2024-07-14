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
  if (!user) {
    console.log("No user provided");
    return [];
  }

  console.log(user.email, "user");

  const { data: customerData, error: customerError } = await supabase
    .from("customers")
    .select("id")
    .eq("email", user.email)
    .single();

  if (customerError) {
    console.error("Error fetching customer:", customerError);
    return [];
  }

  const customerId = customerData.id;

  const { data: ordersData, error: ordersError } = await supabase
    .from("orders")
    .select("id")
    .eq("customer_id", customerId);

  if (ordersError) {
    console.error("Error fetching orders:", ordersError);
    return [];
  }

  if (ordersData.length === 0) {
    console.log("No orders found for this customer");
    return [];
  }

  const orderIds = ordersData.map((order) => order.id);
  const { data: orderProductsData, error: orderProductsError } = await supabase
    .from("order_product")
    .select("product_id")
    .in("order_id", orderIds);

  if (orderProductsError) {
    console.error("Error fetching order products:", orderProductsError);
    return [];
  }

  if (orderProductsData.length === 0) {
    console.log("No products found for these orders");
    return [];
  }

  const productIds = orderProductsData.map(
    (orderProduct) => orderProduct.product_id
  );

  const { data: productsData, error: productsError } = await supabase
    .from("products")
    .select("*")
    .in("id", productIds);

  if (productsError) {
    console.error("Error fetching products:", productsError);
    return [];
  }

  return productsData;
};

//check if customer exists in db

export const checkIfCustomerExists = async (email) => {
  const { data, error } = await supabase
    .from("customers")
    .select()
    .eq("email", email);
  if (data) {
    return true;
  }
  if (error) {
    return console.log("Error checking existing user.");
  }
};

export const getUserLoyalty = async (email) => {
  const { data, error } = await supabase
    .from("customers")
    .select("loyalty")
    .eq("email", email);
  if (data && data.length > 0) {
    return data[0];
  } else {
    console.error(error);
    return null;
  }
};

export const updateUserLoyalty = async (email, cartLength) => {
  const currentLoyalty = await getUserLoyalty(email);
  let updatedUserLoyalty = currentLoyalty.loyalty + 2 * cartLength;

  const { error } = await supabase
    .from("customers")
    .update({ loyalty: updatedUserLoyalty })
    .eq("email", email);
  if (error) {
    return console.log("Error updating user loyalty", error);
  }
};
