import {gql} from "@apollo/client";

export const GET_VEGETABLES = gql`
   query{
    getVegetableProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        image
        key
      }
  }
}
`;
