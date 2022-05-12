import React from "react";
import ProductShelf from "./ProductShelf";
import { TimedProductContainerProps } from "./TimedProductContainer";
import Timer from "./Timer";

const ProductContainer = ({
  products,
  startDate,
  endDate,
  timer,
  starImg,
  starAlt,
  shelfCustomStyle,
  offerCustomStyle,
  productImageStyle,
  productNameStyle,
  ratingContainerStyle,
  starRatingStyle,
  oldPriceStyle,
  priceStyle,
  installmentsStyle,
  timerStyle,
}: TimedProductContainerProps) => {
  if(startDate === undefined) {
    startDate=new Date(1)
  }
  if(endDate === undefined) {
    endDate=new Date(9283749178278)
  }
  return (
    <div data-testid="product-container" style={{
      width: "85%",
      display: "flex",
      margin: "auto",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
      }}>
      <Timer
        data-test-id="timer"
        timerStyle={timerStyle}
        startDate={startDate}
        endDate={endDate}
        timer={timer}
      >
        <ProductShelf
          data-test-id="product-shelf"
          shelfCustomStyle={shelfCustomStyle}
          offerCustomStyle={offerCustomStyle}
          productImageStyle={productImageStyle}
          productNameStyle={productNameStyle}
          ratingContainerStyle={ratingContainerStyle}
          starRatingStyle={starRatingStyle}
          oldPriceStyle={oldPriceStyle}
          priceStyle={priceStyle}
          installmentsStyle={installmentsStyle}
          starAlt={starAlt}
          starImg={starImg}
          products={products}
        />
      </Timer>
    </div>
  );
};

export default ProductContainer;
