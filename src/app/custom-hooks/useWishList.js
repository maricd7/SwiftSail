function useWishList(
  product,
  setIconColor,
  setWishList,
  wishListModal,
  removedWishList,
  setWishListModal,
  setRemovedWishList,
) {



  const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isProductInWishlist = existingWishlist.some(
    (item) => item.id === product.id
  );

  //check if product exists in wishlist
  if (isProductInWishlist) {
    const newWishList = existingWishlist.filter(
      (item) => item.id !== product.id
    );
    localStorage.setItem("wishlist", JSON.stringify(newWishList));

    // handleRemoveProduct();
    setIconColor("#808080");
    handleRemove();
    setWishList(newWishList);
    return;
  }

  const updatedWishlist = [...existingWishlist, product];
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  setIconColor("#FF6961");
  handleModal();





  // modal for adding to wishlist
  function handleModal() {
    setWishListModal(!wishListModal);
    setTimeout(() => {
      setWishListModal(false);
    }, 1500);
  }

  //modal for removing from wishlist
  function handleRemove() {
    setRemovedWishList(!wishListModal);
    setTimeout(() => {
      setRemovedWishList(false);
    }, 1500);
  }
}

export default useWishList;
