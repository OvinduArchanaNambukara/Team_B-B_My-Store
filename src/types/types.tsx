export interface IProducts{
    category:string
    productDetails:IProduct[]
}

export interface IProduct{
    name:string
    image:string
    currentPrice:number
    oldPrice:number
}