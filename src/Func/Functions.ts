import {IProduct, IProducts, QueryItem} from "../types/types";
import axios from "axios";

export const processData = async (data: QueryItem) => {
  const items: IProduct[] = [];
  for (const product of data.products) {
    const res = await axios.post('/getImage', {
      key: product.key
    });
    items.push({
      inCart: false,
      product: {
        name: product.name,
        oldPrice: product.old_price,
        currentPrice: product.current_price,
        id: product._id,
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
