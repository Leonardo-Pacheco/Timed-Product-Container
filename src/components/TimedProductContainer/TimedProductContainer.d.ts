export interface ProductData {
  offer?: boolean;
  offerText?: string;
  quantity: number;
  page: string;
  name: string;
  image: string;
  rating?: number;
  discountPrice?: string;
  price: string ;
  installments?: string ;
}

export interface TimedProductContainerProps {
  products: ProductData[];
  startDate?: Date;
  endDate?: Date;
  timer: boolean;
  starImg?: string;
  starAlt?: string;
  shelfCustomStyle?: {
    width?: string;
    margin?: string;
    borderRadius?: string;
    border?: string;
  }
  offerCustomStyle?: {
    backgroundColor?: string;
    fontSize?: string;
    fontWeight?: string;
    borderRadius?: string;
    color?: string;
    width?: string;
    height?: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
  productImageStyle?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  }
  productNameStyle?: {
    fontSize?: string;
    fontWeight?: string;
    webkitLineClamp?: number;
  }
  ratingContainerStyle?: {
    width?: string;
    justifyContent?: string;
  }
  starRatingStyle?: {
    width?: string;
    height?: string;
    margin?: string;
  }
  oldPriceStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
  priceStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
  installmentsStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
  timerStyle?: {
    fontSize?: string;
    fontWeight?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }
}

export interface ProductShelfProps {
  products: ProductData[];
  starImg?: string;
  starAlt?: string;
  productsContainerStyle?: {
    display?: string;
    flexWrap?: any;
    alignItems?: string;
    justifyContent?: string;
    marginTop?: string;      
  }
  shelfCustomStyle?: {
    width?: string;
    margin?: string;
    backgroundColor?: string;
    borderRadius?: string;
    display?: string;
    justifyContent?: string;
    flexDirection?: any;
    cursor?: string;
    boxShadow?: string;
  }
  offerCustomStyle?: {
    background?: string;
    margin?: string;
    position?: any;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    cursor?: string;
    fontSize?: string;
    fontWeight?: string;
    borderRadius?: string;
    color?: string;
    width?: string;
    height?: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
  linkBoxStyle?: {
    padding?: string;
    display?: string;
    flexDirection?: any;
    color?: string;
    textDecoration?: string;
  }
  productImageStyle?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  }
  productNameStyle?: {
    display?: string;
    wordBreak?: any;
    overflow?: string;
    textOverflow?: string;
    marginBottom?: string;
    fontSize?: string;
    fontWeight?: string;
    webkitLineClamp?: number;
  }
  ratingContainerStyle?: {
    display?: string;
    width?: string;
    justifyContent?: string;
  }
  starRatingStyle?: {
    width?: string;
    height?: string;
    margin?: string;
  }
  oldPriceStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
  priceStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
  installmentsStyle?: {
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    margin?: string;
  }
}

export interface TimerProps {
  startDate: Date;
  endDate: Date;
  timer: boolean;
  children: React.ReactNode;
  timerStyle?: {
    fontSize?: string;
    fontWeight?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}