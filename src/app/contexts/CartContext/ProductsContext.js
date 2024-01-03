import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext({
  products: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: () => [],

});

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
   

    const fetchProducts = async () => {
      try {
        const URL = "https://dummyjson.com/products";
        const res = await fetch(URL);
        const productsData = await res.json();
        setProducts(productsData.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    const addedProduct = products.find((product) => product.id === id);
    setCart([...cart, addedProduct]);
    localStorage.setItem('cart',JSON.stringify([...cart, addedProduct]));
    console.log(addedProduct, "ovo su kolica");
  };

  const removeFromCart = (id) => {
    localStorage.setItem('cart', [])
    if (cart.length) {
     const newCart = cart.filter(cartItem => cartItem.id !== id)
    setCart([...newCart]);
    localStorage.setItem('cart',JSON.stringify([...newCart]))
    console.log(newCart)
    }
  };



  const contextValue = {
    cart,
    products: products,
    addToCart,
    removeFromCart,
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
