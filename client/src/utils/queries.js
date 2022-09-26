
import {gql} from "@apollo/client";

export const QUERY_PRODUCTS=gql`
query Query {
    getProducts {
      _id
      description
      price
      image
      stockQuantity
      name
    }
  }

`;
