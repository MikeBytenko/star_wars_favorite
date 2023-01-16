import {gql} from '@apollo/client';

export const GetAllUsers = gql`
  query GetAllUsers($after: String, $before: String, $first: Int, $last: Int) {
    allPeople(after: $after, before: $before, first: $first, last: $last) {
      totalCount
      edges {
        cursor
        node {
          birthYear
          gender
          homeworld {
            name
          }
          id
          species {
            name
          }
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
