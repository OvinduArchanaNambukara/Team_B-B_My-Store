import {IProduct, IProducts, QueryItem} from "../types/types";
import axios from "axios";

export const processData = async (data: QueryItem) => {
  const items: IProduct[] = [];
  for (const datum of data.products) {
    const res = await axios.post('/getImage', {
      name: datum.key
    });
    items.push({
      inCart: false,
      product: {
        name: datum.name,
        oldPrice: datum.old_price,
        currentPrice: datum.current_price,
        id: datum._id,
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
