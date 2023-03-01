import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:8000/graphql";

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const DISTRICTS_BY_QUERY = gql`
  query DistrictsByQuery($input: MultiParamInput!) {
    districts: districtsBy(input: $input) {
      # this is where we can use fragments to set up different return values?
      YEAR
      REGION
      PROVINCE
      DISTRICT
      POP_ZONE
      ECON_SCORE
      ENVR_SCORE
    }
  }
`;
