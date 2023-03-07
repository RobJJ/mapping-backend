import { useQuery } from "@apollo/client";
import { DISTRICTS_BY_QUERY, UNIQUE_YEARS } from "./graphql.queries";

export function useDistrictsBy(
  YEAR,
  REGION_ID,
  PROVINCE_ID,
  DISTRICT_ID,
  POP_ZONE
) {
  const { data, loading, error } = useQuery(DISTRICTS_BY_QUERY, {
    variables: {
      input: {
        YEAR,
        REGION_ID,
        PROVINCE_ID,
        DISTRICT_ID,
        POP_ZONE,
      },
    },
  });
  console.log("useDistrictsBy hook called.. the data is :", data);

  return {
    // districtsBy is the tag read from query.. so data.districtsBy gets that array
    districts: data?.districtsBy,
    loading,
    error: Boolean(error),
  };
}

export function useUniqueYears() {
  console.log("being called!");
  const { data, loading, error } = useQuery(UNIQUE_YEARS);

  return {
    data,
    loading,
    error: Boolean(error),
  };
}
