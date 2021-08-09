import {IProduct, IProducts, QueryItem, QueryItems} from "../types/types";
import axios from "axios";
import {store} from "../store/reducers/RootReducer";

const checkInTheCart = (product: QueryItem): boolean => {
  const cartItemList = store.getState().cartReducer.cartList;
  if (!cartItemList || cartItemList.length === 0) {
    return false;
  }
  for (const iCheckoutProduct of cartItemList) {
    if (iCheckoutProduct.product.id === product._id) {
      return true;
    }
  }
  return false;
}

export const processData = async (data: QueryItems) => {
  const items: IProduct[] = [];
  for (const product of data.products) {
    const res = await axios.post('/getImage', {
      key: product.key
    });
    items.push({
      inCart: checkInTheCart(product),
      product: {
        name: product.name,
        oldPrice: product.old_price,
        currentPrice: product.current_price,
        id: product._id,
        qty: product.qty,
        image: res.data
      }
    });
  }
  const productData: IProducts[] = [
    {
      category: data.category_name,
      productDetails: items
    }
  ];
  return productData;
}
