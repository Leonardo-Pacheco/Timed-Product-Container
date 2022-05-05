import React from "react";
import ProductShelf from "./ProductShelf";
import "./styles.css";
import Timer from "./Timer";

interface TimedProductContainerProps {
  productsData: ProductData[];
  startDate: Date;
  endDate: Date;
  offerBackgroundColor?: string;
  timer: boolean;
}

const TimedProductContainer = (Props: TimedProductContainerProps) => {
  const { productsData, startDate, endDate, offerBackgroundColor, timer } =
    Props;

  return (
    <div className="container">
      <Timer startDate={startDate} endDate={endDate} timer={timer}>
        {" "}
        <p>texto</p>{" "}
      </Timer>
      <div className="product-container">
        {productsData.map((products) => {
              return (
                <ProductShelf
                  product={products}
                  offerBackgroundColor={offerBackgroundColor}
                />
              );
            })}
      </div>
    </div>
  );
};

export default TimedProductContainer;
