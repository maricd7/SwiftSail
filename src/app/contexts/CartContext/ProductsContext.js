import { createContext, useState, useEffect, useContext } from "react";
import supabase from "@/app/supabase";

const ProductContext = createContext({
  products: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: () => [],
  searchProducts: () => [],
  cartCounter: null,
});

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [originalProducts, setOriginalProducts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("products").select("*");
        if (error) {
          throw error;
        }
        setProducts(data);
        setOriginalProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  const addToCart = (id) => {
    const addedProduct = products.find((product) => product.id === id);
    setCart([...cart, addedProduct]);
    localStorage.setItem("cart", JSON.stringify([...cart, addedProduct]));
    setCartCounter(cartCounter + 1);
  };

  const removeFromCart = (id) => {
    localStorage.setItem("cart", []);
    if (cart.length) {
      const newCart = cart.filter((cartItem) => cartItem.id !== id);
      setCart([...newCart]);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      setCartCounter(cartCounter - 1);
    }
  };


  //searching products logic
  const searchProducts = (e) => {
    if (e.target.value === '') {
      setProducts(originalProducts);
    } else {
      const searchValue = e.target.value.toLowerCase();
      
      const searchedProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
        
        if (productName.includes(searchValue)) {
          console.log(product, "inputed");
          return true;
        } else {
          console.log("nema produkt");
          return false;
        }
      });
      console.log(searchedProducts, "pretraga");
      setProducts(searchedProducts);
    }
  };

  const contextValue = {
    cart,
    products: products,
    cartCounter,
    addToCart,
    removeFromCart,
    searchProducts,
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
