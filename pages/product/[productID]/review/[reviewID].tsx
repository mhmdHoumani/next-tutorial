import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { productID, reviewID } = router.query;
  return (
    <div>
      <h1>
        Review {reviewID} from product {productID}
      </h1>
    </div>
  );
};

export default Review;
