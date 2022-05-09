import React from "react";
import "./App.css";
import ProductContainer from "./components/TimedProductContainer/index";

function App() {
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
  ];

  return (
    <div className="App">
      <ProductContainer
        timer={true}
        products={productsData}
        startDate={new Date("2022-04-03T14:30:00")}
        endDate={new Date("2022-06-05T15:49:00")}
      />
    </div>
  );
}

export default App;
