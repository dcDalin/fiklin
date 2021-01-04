import { gql } from '@apollo/client';

export const USER_EXISTS = gql`
  query MyQuery($id: String!) {
    users_by_pk(id: $id) {
      display_name
      email
      is_complete
      phone_number
      profile_url
      public_id
      id
      is_active
      user_name
    }
  }
`;
