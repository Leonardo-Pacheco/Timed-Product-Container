import React from "react";

const ProductShelf = ({
  products,
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
}: ProductShelfProps) => {
  return (
    <div className="product-container">
      {products?.map((product, idx) => {
        return (
          <div style={shelfCustomStyle} className="shelf" key={idx}>
            {product.offer ? (
              <p style={offerCustomStyle} className="offer">
                {product.offerText}
              </p>
            ) : null}
            <a key={idx} className="link-box" href={product.page}>
              <img
                style={productImageStyle}
                className="productImg"
                src={product.image}
                alt="product"
              />
              <p style={productNameStyle} className="productName">
                {product.name}
              </p>
              {product?.rating || product?.rating === null ? (
                <div style={ratingContainerStyle} className="stars-container">
                  <img
                    style={starRatingStyle}
                    className={
                      product.rating >= 1 ? `star` : `transparent-star`
                    }
                    src={
                      starImg ?? "https://www.svgrepo.com/show/13695/star.svg"
                    }
                    alt={starAlt ?? "rating-star"}
                  />
                  <img
                    style={starRatingStyle}
                    className={product.rating > 2 ? `star` : `transparent-star`}
                    src={
                      starImg ?? "https://www.svgrepo.com/show/13695/star.svg"
                    }
                    alt={starAlt ?? "rating-star"}
                  />
                  <img
                    style={starRatingStyle}
                    className={product.rating > 3 ? `star` : `transparent-star`}
                    src={
                      starImg ?? "https://www.svgrepo.com/show/13695/star.svg"
                    }
                    alt={starAlt ?? "rating-star"}
                  />
                  <img
                    style={starRatingStyle}
                    className={product.rating > 4 ? `star` : `transparent-star`}
                    src={
                      starImg ?? "https://www.svgrepo.com/show/13695/star.svg"
                    }
                    alt={starAlt ?? "rating-star"}
                  />
                  <img
                    style={starRatingStyle}
                    className={
                      product.rating >= 5 ? `star` : `transparent-star`
                    }
                    src={
                      starImg ?? "https://www.svgrepo.com/show/13695/star.svg"
                    }
                    alt={starAlt ?? "rating-star"}
                  />
                </div>
              ) : null}
              {product.offer ? (
                <p style={oldPriceStyle} className="oldPrice">
                  R$ {product.discountPrice}
                </p>
              ) : null}
              <p style={priceStyle} className="price">
                R$ {product.price}
              </p>
              <p style={installmentsStyle} className="installments">
                {product.installments}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProductShelf;
