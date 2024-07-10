"use client";
import { createContext, useState, useEffect, useContext } from "react";
import supabase from "@/app/supabase";
import Wishlist from "@/app/wishlist/page";
import { checkUser } from "@/app/actions/getUserAction";
import { fetchData } from "@/app/actions/getProducts";

const ProductContext = createContext({
  products: null,
  cart: null,
  cartCounter: null,
  categories: null,
  wishList: null,
  boughtProducts: null,
  wishlistIcon: "",
  alreadyInCart: null,
  addToCart: () => [],
  removeFromCart: () => [],
  searchProducts: () => [],
  setCart: () => [],
  setProducts: () => [],
  setWishList: () => [],
  addToWishList: () => [],
  removeFromWishlist: () => [],
});

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [boughtProducts, setBoughtProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistIcon, setWishlistIcon] = useState("#808080");
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData();
      if (data) {
        setProducts(data);
        setOriginalProducts(data);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    setAlreadyInCart(false);
    const isProductInCart = cart.some((product) => product.id === id);
    if (!isProductInCart) {
      const addedProduct = products.find((product) => product.id === id);
      addedProduct.quantity = 1;
      setCart([...cart, addedProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, addedProduct]));
      setCartCounter(cartCounter + 1);
    } else {
      setAlreadyInCart(true);
      console.log("Product is already in the cart");
    }
  };

  //removing from cart
  const removeFromCart = (id) => {
    if (cart.length) {
      const newCart = cart.filter((cartItem) => cartItem.id !== id);
      setCart([...newCart]);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      setCartCounter(cartCounter - 1);
    }
  };

  //searching products logic
  const searchProducts = (e) => {
    if (e.target.value === "") {
      setProducts(originalProducts);
    } else {
      const searchValue = e.target.value.toLowerCase();

      const searchedProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();

        if (productName.includes(searchValue)) {
          return true;
        } else {
          console.log("No product matches this value");
          return false;
        }
      });
      setProducts(searchedProducts);
    }
  };

  //filtering all categories based on products
  useEffect(() => {
    let uniqCategories = [];
    products.forEach((product) => {
      if (uniqCategories.some((category) => category === product.category)) {
        return false;
      }
      uniqCategories.push(product.category);
    });
    setCategories(uniqCategories);
  }, [products]);

  //getting bought products for current user
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data, error } = await supabase.from("customers").select("*");
        if (error) {
          throw error;
        }
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchUsers();
  }, []);

  const currentUserDB = customers.filter(
    (customer) => customer.email === currentUser
  );
  useEffect(() => {
    setCurrentUserId(currentUserDB[0]?.id);
  }, [customers]);

  // useEffect(() => {
  //   async function fetchOrders() {
  //     try {
  //       const { data, error } = await supabase
  //         .from("orders")
  //         .select("*")
  //         .eq("customer_id", currentUserId);
  //       setOrderId(data[0]?.id);
  //       if (error) {
  //         throw error;
  //       }
  //       setOrders(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   }
  //   fetchOrders();
  // }, [currentUserId]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const { data, error } = await supabase
  //         .from("order_product")
  //         .select("*")
  //         .eq("order_id", orderId);
  //       const originalBought = [];
  //       data.forEach((dataSet) => {
  //         originalBought.push(dataSet.product_id);
  //       });
  //       setBoughtProducts(originalBought);
  //       if (error) {
  //         throw error;
  //       }
  //       setOrders(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   }
  //   fetchProducts();
  // }, [orderId]);

  //wishlist logic
  useEffect(() => {
    const existingWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(existingWishList);
  }, []);

  function addToWishList(product) {
    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  }
  function removeFromWishlist(productId) {
    const existingProduct = wishlist.find((item) => item.id === productId);
    const newWishList = wishlist.filter(
      (item) => item.id !== existingProduct.id
    );
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
    setWishlist(newWishList);
    setWishlistIcon("#080808");
  }

  const contextValue = {
    cart,
    products: products,
    boughtProducts,
    categories,
    wishlist,
    wishlistIcon,
    cartCounter,
    alreadyInCart,
    addToCart,
    addToWishList,
    removeFromWishlist,
    removeFromCart,
    searchProducts,
    setCart,
    setProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error(
      "No ProductContext.Provider found when calling useProductContext."
    );
  }
  return productContext;
};
