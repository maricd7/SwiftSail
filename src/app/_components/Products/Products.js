import React, { useEffect} from 'react'
import { ProductBox } from './ProductBox'

export const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const URL = 'https://dummyjson.com/products'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const URL = 'https://dummyjson.com/products';
        const res = await fetch(URL);
        const products = await res.json();
        console.log(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      {productsData && (<li>
        
      </li>)}
    </div>
  )
}
