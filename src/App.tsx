import React from 'react';
import './App.css';
import ProductContainer from './components/TimedProductContainer/index';

function App() {

  const productsData = [
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "1x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 4,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "2x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 2,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "3x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 5,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "4x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 2.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "1x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 0.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "2x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 1.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "3x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 2.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "4x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 3.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "1x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 5,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "2x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 3.5,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "3x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 3,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "4x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 2,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "1x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 4.5,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "2x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 0,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "3x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "4x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 2,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "1x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 3,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "2x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 5,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "3x"
    },
    {
        offer: true,
        offerText: "mega oferta!!",
        page: "https://www.americanas.com.br/produto/134568005?chave=dk_hm_bn_4_6_ge&offerId=5d5fe32af216c95bdea43a01",
        name: "Lavadora de Roupas Electrolux 11 kg Premium Care Branca com 08 Programas de Lavagem e Vapour Care - LFE11",
        image: "https://images-americanas.b2w.io/produtos/1546754912/imagens/lavadora-de-roupas-electrolux-11-kg-premium-care-branca-com-08-programas-de-lavagem-e-vapour-care-lfe11/1546754912_1_medium.jpg",
        rating: 4.1,
        discountPrice: "1200.00",
        price: "1000.00",
        installments: "4x"
    }
]

  return (
    <div className="App">
      <ProductContainer productsData={productsData} startDate={new Date(2022, 4, 3, 14, 30)} endDate={new Date(2022, 4, 5, 18, 50)}/>
    </div>
  );
}

export default App;
