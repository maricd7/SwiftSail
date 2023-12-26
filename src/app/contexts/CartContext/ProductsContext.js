import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext({
  products: null,
  cart: null,
});

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // Fix the typo here
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const URL = 'https://dummyjson.com/products';
        const res = await fetch(URL);
        const productsData = await res.json();
        setProducts(productsData.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const contextValue = {
    cart: cart,
    products: products,
  };

  return (
    <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const productContext = useContext(ProductContext); 

  if (!productContext) {
    throw new Error("No ProductContext.Provider found when calling useProductContext.");
  }
  return productContext;
};
