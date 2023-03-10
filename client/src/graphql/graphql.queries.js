import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:8000/graphql";

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const DISTRICTS_BY_QUERY = gql`
  query DistrictsByQuery($input: MultiParamInput!) {
    districtsBy(input: $input) {
      # this is where we can use fragments to set up different return values?
      DISTRICT_ID
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

export const UNIQUE_YEARS = gql`
  query YearsByQuery {
    uniqueYears {
      uniqueYears
    }
  }
`;

export const UNIQUE_REGIONS = gql`
  query RegionsByQuery {
    uniqueRegions {
      _id
      regionId
    }
  }
`;

export const UNIQUE_PROVINCES = gql`
  query ProvincesByQuery {
    uniqueProvinces {
      _id
      provinceId
    }
  }
`;

export const UNIQUE_DISTRICTS = gql`
  query DistrictsByQuery {
    uniqueDistricts {
      _id
      districtId
    }
  }
`;

// export const GEOJSON = gql`
// query GeoJsonByQuery {

// }
// `;
