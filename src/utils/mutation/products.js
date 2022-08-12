import {gql} from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct($input: EditProductDtoInput!) {
    createProduct(input: $input) {
      title
      price
      description
      id
      pictures {
        url
      }
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id)
}
`;

export {CREATE_PRODUCT, DELETE_PRODUCT};
