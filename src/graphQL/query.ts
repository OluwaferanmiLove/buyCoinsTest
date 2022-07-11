import {gql} from '@apollo/client';

export const FETCH_TRANSACTION_HISTORY = gql`
  query allTransactionHistory {
    allTransactionHistory {
      name
      status
      type
      id
      date
    }
  }
`;
