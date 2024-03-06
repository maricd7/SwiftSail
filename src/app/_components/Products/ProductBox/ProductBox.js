import React, { useEffect, useState } from "react";
import { CategoryTag, CtaButton } from "../../common";
import Link from "next/link";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { ProductBoxImage } from "./ProductBoxImage";
import ProductDiscount from "./ProductDiscount";
import ProductPrice from "./ProductPrice";
import { WishListBtn } from "./WishListBtn";
import OutOfStock from "../../OutOfStock/OutOfStock";

export const ProductBox = ({
  product,
  handleModal,
  handleRemoveProduct,
  setWishList,
}) => {
  const productRef = "/products/" + product.id;

  //wishlist params
  const [iconColor, setIconColor] = useState("#808080");
  const [wishListModal, setWishListModal] = useState(false);
  const [removedWishList, setRemovedWishList] = useState(false);

  const { addToCart } = useProductContext();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
    handleModal();
  };

  const [productDescription, setProductDescription] = useState(
    product.description
  );
  const [stock, setStock] = useState(product.stock);

  function checkDescription() {
    if (productDescription.length >= 56) {
      setProductDescription(product.description.slice(0, 56 - 3) + "...");
    } else {
      setProductDescription(productDescription);
    }
  }
  function checkStock() {
    product.stock > 1 ? setStock(false) : setStock(true);
  }

  useEffect(() => {
    checkDescription();
    checkStock();
  }, [product]);

  return (
    <div className="rounded-xl w-60 mt-8  rounded overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 cursor-pointer  flex flex-col justify-start items-center relative  ">
      <WishListBtn
        product={product}
        handleRemoveProduct={handleRemoveProduct}
        setWishList={setWishList}
        iconColor={iconColor}
        setIconColor={setIconColor}
        wishListModal={wishListModal}
        setWishListModal={setWishListModal}
        removedWishList={removedWishList}
        setRemovedWishList={setRemovedWishList}
      />
      <Link
        href={{ pathname: productRef }}
        className="flex justify-center  flex-col  relative items-center"
      >
        {product.discount ? (
          <ProductDiscount discount={product.discount} />
        ) : (
          <></>
        )}
        <ProductBoxImage product={product} />
        <div className="text-left">
          <h2 className="mt-4 mb-2 text-md h-20 w-3/4">{product.name}</h2>
          <CategoryTag product={product} />
          <p className="text-gray-400 mt-2 h-20" style={{ maxWidth: "160px" }}>
            {productDescription}
          </p>
          <ProductPrice price={product.price} discount={product.discount} />
        </div>
      </Link>
      {stock ? (
          <OutOfStock
            product={product}
            handleRemoveProduct={handleRemoveProduct}
            setWishList={setWishList}
            iconColor={iconColor}
            setIconColor={setIconColor}
            wishListModal={wishListModal}
            setWishListModal={setWishListModal}
            removedWishList={removedWishList}
            setRemovedWishList={setRemovedWishList}
          />
        ) : (
          <CtaButton
            text="Add to Cart"
            onClick={addProductItemToContext(product.id)}
          />
        )}
      {stock}
    </div>
  );
};
