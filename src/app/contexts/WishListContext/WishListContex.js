import { createContext, useState, useEffect, useContext } from "react";

const WishListContext = createContext({
    wishlist : null,
});


export const WishListContextProvider = ({ children }) => {
    const [wishlist,setWishList] = useState([])
    useEffect(()=>{
       setWishList(JSON.parse(localStorage.getItem('wishlist')))
    },[])
    console.log(wishlist, 'list kontekst')
};

export const useWishListContext = () => {
  const productContext = useContext(WishListContext);

  if (!productContext) {
    throw new Error(
      "No ProductContext.Provider found when calling useProductContext."
    );
  }
  return productContext;
};
