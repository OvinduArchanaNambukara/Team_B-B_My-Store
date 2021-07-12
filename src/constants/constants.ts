import {IProduct, IProducts} from "../types/types";
import CarrotImg from "../assets/images/groceryImages/carrot.jpg";
import CabbageImg from "../assets/images/groceryImages/cabbage.jpg";
import EggplantImg from "../assets/images/groceryImages/eggplant.jpg";
import GarlicImg from "../assets/images/groceryImages/garlic.jpg";
import LeaksImg from "../assets/images/groceryImages/leaks.jpg";
import OnionImg from "../assets/images/groceryImages/onion.jpg";
import PotatoImg from "../assets/images/groceryImages/potato.jpg";

export const deleteIconColor: string = "#3c6382";

export const ProductList: IProduct[] = [
  {
    product: {id: "0001", name: "Carrot", image: CarrotImg, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0002", name: "Cabbage", image: CabbageImg, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0003", name: "Garlic", image: GarlicImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0004", name: "Leaks", image: LeaksImg, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0005", name: "Onion", image: OnionImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0006", name: "Potato", image: PotatoImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0007", name: "Carrot", image: CarrotImg, currentPrice: 75, oldPrice: 85},
    inCart: false
  },
  {
    product: {id: "0008", name: "Egg Plant", image: EggplantImg, currentPrice: 75, oldPrice: 85},
    inCart: false
  },
];

export const ShopProducts: IProducts[] = [
  {
    category: "Vegetables",
    productDetails: ProductList
  }
]


