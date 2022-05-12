/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import ProductContainer from './components/TimedProductContainer'

describe("ProductContainer test", () => {

    const productsData = [
        {
          offer: true,
          offerText: "mega oferta!!",
          quantity: 2,
          page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
          name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
          image:
            "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
          rating: 1,
          discountPrice: "1200.00",
          price: "1000.00",
          installments: "1x sem juros no cartao",
        },
        {
          offer: true,
          offerText: "mega oferta!!",
          quantity: 2,
          page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
          name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
          image:
            "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
          rating: 1,
          discountPrice: "1200.00",
          price: "1000.00",
          installments: "1x sem juros no cartao",
        },
        {
          offer: true,
          offerText: "mega oferta!!",
          quantity: 2,
          page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
          name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
          image:
            "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
          rating: 1,
          discountPrice: "1200.00",
          price: "1000.00",
          installments: "1x sem juros no cartao",
        }
    ]

    it("should render component", () => {
        const { getByTestId } = render(<ProductContainer products={productsData} timer={false} />)

        const dataTestId = getByTestId(/product-container/i)

        expect(dataTestId).toBeDefined()
    })

    it("should render timer", () => {
        const { getByTestId } = render(<ProductContainer products={productsData} timer={true} startDate={new Date(1)} endDate={new Date(920394857617)}/>)
        
        const dataTestId = getByTestId(/timer/i)
        
        expect(dataTestId).toBeDefined()
    })

    it("should render shelf", () => {
        const { getByTestId } = render(<ProductContainer products={productsData} timer={false}/>)
        
        const dataTestId = getByTestId(/product-shelf/i)
        
        expect(dataTestId).toBeDefined()
    })
})