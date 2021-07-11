import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ISocialLink {
  icon: IconProp
  path: string
}

export interface categoryTypes {
  image: string
  name: string
}

export interface optionTypes {
  label: string
  value: string
}

export interface IProducts {
  category: string
  productDetails: IProduct[]
}

export interface IProduct {
  name: string
  image: string
  currentPrice: number
  oldPrice: number | null
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICheckoutProduct {
  quantity: number | null
  product: IProduct
}
