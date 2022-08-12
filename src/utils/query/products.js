import {gql} from '@apollo/client';

const GET_ALL_PRODUCTS = gql`
  query {
    products(first: 50) {
      nodes {
        title
        price
        description
        id
        pictures {
          url
        }
      }
    }
  }
`;

const GET_PRODUCT = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      description
      title
      price
      pictures {
        url
      }
      seller {
        name
        phoneNumber
        email
        avatar
      }
    }
  }
`;

export {GET_ALL_PRODUCTS, GET_PRODUCT};
