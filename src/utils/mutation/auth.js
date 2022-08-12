import {gql} from '@apollo/client';

const REGISTER_USER = gql`
  mutation register($input: UserRegisterDtoInput!) {
    register(input: $input) {
      name,
      email,
      phoneNumber,
      id,
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($input: UserCredentialsDtoInput!) {
    login(input: $input) {
      name,
      email,
      id,
      token,
    }
  }
`;

export {REGISTER_USER, LOGIN_USER};
