import React from 'react'
import { ProductData, ProductShelfProps } from './TimedProductContainer'

const ProductShelf = ({
  products,
  starImg,
  starAlt,
  productsContainerStyle,
  shelfCustomStyle,
  offerCustomStyle,
  linkBoxStyle,
  productImageStyle,
  productNameStyle,
  ratingContainerStyle,
  oldPriceStyle,
  priceStyle,
  installmentsStyle
}: ProductShelfProps) => {
  return (
    <div data-testid="product-shelf"
      style={
        productsContainerStyle ?? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '25px'
        }
      }
    >
      {products?.map((product: ProductData, idx: number) => {
        return (
          <div
            style={
              shelfCustomStyle ?? {
                width: '300px',
                margin: '25px 0',
                backgroundColor: '#fff',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                cursor: 'pointer',
                boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 6px'
              }
            }
            key={idx}
          >
            {product.offer ? (
              <p
                style={
                  offerCustomStyle ?? {
                    background: 'red',
                    height: '40px',
                    margin: '0',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px 5px 0 0',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'auto'
                  }
                }
              >
                {product.offerText}
              </p>
            ) : null}
            <a
              key={idx}
              style={
                linkBoxStyle ?? {
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'black',
                  textDecoration: 'none'
                }
              }
              href={product.page}
            >
              <img
                style={productImageStyle ?? { marginTop: '5px' }}
                src={product.image}
                alt="product"
              />
              <p
                style={
                  productNameStyle ?? {
                    display: '-webkit-box',
                    wordBreak: 'break-word',
                    fontSize: '15px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: '5px'
                  }
                }
              >
                {product.name}
              </p>
              {product?.rating || product?.rating === null ? (
                <div style={ratingContainerStyle ?? { display: 'flex' }}>
                  <img
                    style={
                      product.rating >= 1
                        ? { width: 20 }
                        : { width: 20, opacity: 0.5 }
                    }
                    src={
                      starImg ?? 'https://www.svgrepo.com/show/13695/star.svg'
                    }
                    alt={starAlt ?? 'rating-star'}
                  />
                  <img
                    style={
                      product.rating > 2
                        ? { width: 20 }
                        : { width: 20, opacity: 0.5 }
                    }
                    src={
                      starImg ?? 'https://www.svgrepo.com/show/13695/star.svg'
                    }
                    alt={starAlt ?? 'rating-star'}
                  />
                  <img
                    style={
                      product.rating > 3
                        ? { width: 20 }
                        : { width: 20, opacity: 0.5 }
                    }
                    src={
                      starImg ?? 'https://www.svgrepo.com/show/13695/star.svg'
                    }
                    alt={starAlt ?? 'rating-star'}
                  />
                  <img
                    style={
                      product.rating > 4
                        ? { width: 20 }
                        : { width: 20, opacity: 0.5 }
                    }
                    src={
                      starImg ?? 'https://www.svgrepo.com/show/13695/star.svg'
                    }
                    alt={starAlt ?? 'rating-star'}
                  />
                  <img
                    style={
                      product.rating >= 5
                        ? { width: 20 }
                        : { width: 20, opacity: 0.5 }
                    }
                    src={
                      starImg ?? 'https://www.svgrepo.com/show/13695/star.svg'
                    }
                    alt={starAlt ?? 'rating-star'}
                  />
                </div>
              ) : null}
              {product.offer ? (
                <p
                  style={
                    oldPriceStyle
                      ?? {
                          margin: '5px 0 0',
                          textDecoration: 'line-through',
                          fontSize: '14px',
                          fontWeight: '700'
                        }
                  }
                >
                  R$ {product.discountPrice}
                </p>
              ) : null}
              <p
                style={
                  priceStyle ?? {
                    margin: '0',
                    fontSize: '24px',
                    fontWeight: '700'
                  }
                }
              >
                R$ {product.price}
              </p>
              <p
                style={
                  installmentsStyle ?? {
                    fontSize: '12px',
                    fontWeight: '400'
                  }
                }
              >
                {product.installments}
              </p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default ProductShelf
