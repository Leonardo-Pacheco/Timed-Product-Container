import React from "react";
import ProductShelf from "./ProductShelf";
import "./styles.css";
import Timer from "./Timer";

const TimedProductContainer = ({
  productsData,
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
  return (
    <div className="container">
      <Timer
        timerStyle={timerStyle}
        startDate={startDate}
        endDate={endDate}
        timer={timer}
      >
        <ProductShelf
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
          products={productsData}
        />
      </Timer>
    </div>
  );
};

export default TimedProductContainer;
