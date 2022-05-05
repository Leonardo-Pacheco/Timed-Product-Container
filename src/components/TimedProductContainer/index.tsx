import React from "react";
import ProductShelf from "./ProductShelf";
import './styles.css'
import Timer from "./Timer";

interface TimedProductContainerProps {
    productsData: ProductData[]
    startDate: Date
    endDate: Date
    offerBackgroundColor?: string
}

const TimedProductContainer = (Props: TimedProductContainerProps) => {

    const { productsData, startDate, endDate, offerBackgroundColor } = Props

    const today = new Date()

    return (
        <div className="container">
            {startDate < today && endDate > today ? <Timer startDate={startDate} endDate={endDate} /> : null}
            <div className="product-container">
                {startDate < today && endDate > today ? productsData.map((products) => {
                    return (
                        <ProductShelf product={products} offerBackgroundColor={offerBackgroundColor} />
                    )
                }) : null}
            </div>
        </div>
    );
}

export default TimedProductContainer;
