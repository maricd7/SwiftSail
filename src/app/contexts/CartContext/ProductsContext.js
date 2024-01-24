import { createContext, useState, useEffect, useContext } from "react";
import supabase from "@/app/supabase";

const ProductContext = createContext({
  products: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: () => [],
  searchProducts:()=>[],
  cartCounter:null,
});

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const[cartCounter,setCartCounter] = useState(0); 
  const[filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchData();
  }, []);

  const addToCart = (id) => {
    const addedProduct = products.find((product) => product.id === id);
    setCart([...cart, addedProduct]);
    localStorage.setItem('cart',JSON.stringify([...cart, addedProduct]));
    console.log(addedProduct, "ovo su kolica");
    setCartCounter(cartCounter+1);
  };

  const removeFromCart = (id) => {
    localStorage.setItem('cart', [])
    if (cart.length) {
     const newCart = cart.filter(cartItem => cartItem.id !== id)
    setCart([...newCart]);
    localStorage.setItem('cart',JSON.stringify([...newCart]))
    setCartCounter(cartCounter-1)
    console.log(newCart)
    }
  };


  
  //searching products logic
  const searchProducts = (e)=>{
  console.log('search products', e.target.value)
   const searchedProducts = products.filter(product=>{
    if(product.name.includes(e.target.value)){
      console.log(product, 'inputed')
    }else{
      console.log('nema produkt')
    }
   })
   setFilteredProducts(searchedProducts)
  }


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
