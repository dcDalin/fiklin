import { gql } from '@apollo/client';

export const AUTH_ON_CREATE = gql`
  mutation MyMutation(
    $display_name: String = ""
    $email: String!
    $id: String!
    $phone_number: String = ""
    $profile_url: String = ""
  ) {
    AuthOnCreate(
      display_name: $display_name
      email: $email
      id: $id
      phone_number: $phone_number
      profile_url: $profile_url
    ) {
      display_name
    }
  }
`;
