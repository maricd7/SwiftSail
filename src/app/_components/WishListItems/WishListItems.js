import { ProductBox } from "../Products/ProductBox";
import { useProductContext } from "@/app/contexts/ProductsContext";
import EmptyWishlist from "../EmptyWishlist/EmptyWishlist";
import { Heading } from "../common";

export default function WishListItems() {
  const { wishlist } = useProductContext();

  if (!wishlist.length) {
    return <EmptyWishlist />;
  }

  return (
    <div className="mt-10 lg:mx-72 mx-4 h-screeng8 ">
      <Heading text="Your wishlist" />
      <div className="flex flex-wrap gap-4  justify-start items-center h-full">
        {wishlist.map((wish, index) => (
          <ProductBox key={index} product={wish} />
        ))}
      </div>
    </div>
  );
}
