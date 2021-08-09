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

export interface optionTypes {
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
  qty: string
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

export interface QueryItem {
  _id: string
  current_price: number
  old_price: number
  key: string
  image: string
  name: string
  qty: string
}

export interface QueryItems {
  category_name: string
  products: QueryItem[]
}

export interface GetFoodProducts {
  getFoodProducts: QueryItems
}

export interface GetElectronicProducts {
  getElectronicProducts: QueryItems
}

export interface GetVegetableProducts {
  getVegetableProducts: QueryItems
}

export interface GetMeatProducts {
  getMeatProducts: QueryItems
}

export interface GetFruitProducts {
  getFruitProducts: QueryItems
}

export interface GetPharmacyProducts {
  getPharmacyProducts: QueryItems
}


