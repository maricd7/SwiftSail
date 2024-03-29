import { createContext, useState, useEffect, useContext } from "react";
import supabase from "@/app/supabase";
import Wishlist from "@/app/wishlist/page";

const ProductContext = createContext({
  products: null,
  cart: null,
  cartCounter: null,
  categories:null,
  wishList:null,
  boughtProducts:null,
  wishlistIcon:'',
  addToCart: () => [],
  removeFromCart: () => [],
  searchProducts: () => [],
  setCart:()=>[],
  setProducts:()=>[],
  setWishList:()=>[],
  addToWishList:()=>[],
  removeFromWishlist:()=>[],
});


export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [boughtProducts,setBoughtProducts] = useState([]);
  const [customers,setCustomers] = useState([])
  const [currentUser,setCurrentUser] = useState('')
  const [currentUserId,setCurrentUserId] = useState(null)
  const [orders,setOrders]=useState([])
  const [orderId,setOrderId]=useState(null)
  const [wishlist,setWishlist] = useState([]);
  const [existingWishlist,setExistingWishList] = useState([])
  const [wishlistIcon,setWishlistIcon] = useState('#808080')


  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("products").select("*").eq('status', true);
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
    const isProductInCart = cart.some((product) => product.id === id);
    if (!isProductInCart) {
      const addedProduct = products.find((product) => product.id === id);
      addedProduct.quantity = 1 ;
      setCart([...cart, addedProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, addedProduct]));
      setCartCounter(cartCounter +1);
    } else {
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

  //filtering all categories based on products 
useEffect(()=>{
  let uniqCategories  = []
  products.forEach(product=>{
    if(uniqCategories.some(category => category===product.category)){
      return false
    }
    uniqCategories.push(product.category)
  })
  setCategories(uniqCategories)
},[products])


//getting bought products (if current users mail === any mail in customers table)
useEffect(() => { 
  async function checkUser() {
    const { data: user, error } = await supabase.auth.getUser();
    setCurrentUser(user.user?.email)
    if (error) {
      console.error("Error fetching user:", error.message);
      return;
    }
  }
  checkUser()
},[])

useEffect(()=>{
  async function fetchUsers() {
    try {
      const { data, error } = await supabase.from("customers").select("*")
      if (error) {
        throw error;
      }
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  fetchUsers();
},[])

const trenutniKorisnik = customers.filter(customer=>customer.email === currentUser)
useEffect(()=>{
  setCurrentUserId(trenutniKorisnik[0]?.id)
},[customers])


useEffect(()=>{
  async function fetchOrders() {
    try {
      const { data, error } = await supabase.from("orders").select("*").eq('customer_id', currentUserId);
      console.log(data)
      setOrderId(data[0]?.id)
      if (error) {
        throw error;
      }
      setOrders(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  fetchOrders();
},[currentUserId])

useEffect(()=>{
  async function fetchProducts() {
    try {
      const { data, error } = await supabase.from("order_product").select("*").eq('order_id', orderId);
      console.log(data)
      const originalBought = []
      data.forEach(dataSet=>{
        originalBought.push(dataSet.product_id)
      })
      setBoughtProducts(originalBought)
      if (error) {
        throw error;
      }
      setOrders(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  fetchProducts();
},[orderId])



  //wishlist logic 
  useEffect(() => {
    const existingWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(existingWishList);
  }, []);
  
  function addToWishList(product) {
    console.log('added to w-list');
    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  }
  function removeFromWishlist(productId){
    const existingProduct = wishlist.find(item => item.id === productId);
    const newWishList = wishlist.filter(item => item.id !== existingProduct.id);
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
    setWishlist(newWishList);
    setWishlistIcon('#080808')
  }

console.log(wishlist, 'lista')



  const contextValue = {
    cart,
    products: products,
    boughtProducts,
    categories,
    wishlist,
    wishlistIcon,
    cartCounter,
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
