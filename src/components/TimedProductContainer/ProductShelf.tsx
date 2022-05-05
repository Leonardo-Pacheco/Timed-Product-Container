import React from "react";

interface ProductShelfProps {
    product: ProductData
    offerBackgroundColor?: string
}

const ProductShelf = (Props: ProductShelfProps) => {

    const { product, offerBackgroundColor } = Props

    const installmentsValue = (parseFloat(product.price) / parseFloat(product.installments)).toFixed(2)

    return (
        <div className="shelf">
            {product.offer ? <p style={
                offerBackgroundColor ? { backgroundColor: offerBackgroundColor } : { backgroundColor: 'red' }}
                className="offer">{product.offerText}</p> : null}
            <a className="link-box" href={product.page}>
                <img className="productImg" src={product.image} alt="product" />
                <p className="productName">{product.name}</p>
                {product.rating >= 0 ?
                    <div className="stars-container">
                        <img className={product.rating > 1 ? `star` : `transparent-star`} src="https://www.svgrepo.com/show/13695/star.svg" alt="rating-star"/>
                        <img className={product.rating > 2 ? `star` : `transparent-star`} src="https://www.svgrepo.com/show/13695/star.svg" alt="rating-star"/>
                        <img className={product.rating > 3 ? `star` : `transparent-star`} src="https://www.svgrepo.com/show/13695/star.svg" alt="rating-star"/>
                        <img className={product.rating > 4 ? `star` : `transparent-star`} src="https://www.svgrepo.com/show/13695/star.svg" alt="rating-star"/>
                        <img className={product.rating >= 5 ? `star` : `transparent-star`} src="https://www.svgrepo.com/show/13695/star.svg" alt="rating-star"/>
                    </div>
                    : null}
                {product.offer ? <p className="oldPrice">R$ {product.discountPrice}</p> : null}
                <p className="price">R$ {product.price}</p>
                <p className="installments">{product.installments} de {installmentsValue} sem juros no cartão</p>
            </a>
        </div>
    );
}

export default ProductShelf;
