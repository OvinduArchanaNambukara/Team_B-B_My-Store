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
  category_name: string
  products: {
    _id: string
    current_price: number
    old_price: number
    key: string
    image: string
    name: string
  }[]
}

export interface GetFoodProducts {
  getFoodProducts: QueryItem
}

export interface GetElectronicProducts {
  getElectronicProducts: QueryItem
}

export interface GetVegetableProducts {
  getVegetableProducts: QueryItem
}

export interface GetMeatProducts {
  getMeatProducts: QueryItem
}

export interface GetFruitProducts {
  getFruitProducts: QueryItem
}

export interface GetPharmacyProducts {
  getPharmacyProducts: QueryItem
}


