import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface categoryTypes {
  image: string
  name: string
}

export interface ISocialLink {
  icon: IconProp
  path: string
}

export interface categoryTypes {
  image: string
  name: string
}

export interface ISelectorOption {
  label: string
  value: string
}

export interface IProducts {
  category: string
  productDetails: IProduct[]
}

export interface Item {
  id: string
  name: string
  image: string
  currentPrice: number
  oldPrice: number | null
}

export interface IProduct {
  product: Item,
  inCart: boolean
}

export interface ICartItem {
  product: Item
  quantity: number
}

export interface ICheckoutProduct {
  quantity: number
  product: Item
}

export interface IProductDetails {
  name: string
  category: string
  price: number
  unit: string
  oldPrice?: number
  image: string
}

export interface IOrderDetails {
  orderId: string,
  total: number,
  date: string
}