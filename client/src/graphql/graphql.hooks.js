import { useQuery } from "@apollo/client";
import { DISTRICTS_BY_QUERY } from "./graphql.queries";

export function useDistrictsBy(
  YEAR,
  REGION_ID,
  PROVINCE_ID,
  DISTRICT_ID,
  POP_ZONE
) {
  const { data, loading, error } = useQuery(DISTRICTS_BY_QUERY, {
    variables: {
      YEAR,
      REGION_ID,
      PROVINCE_ID,
      DISTRICT_ID,
      POP_ZONE,
    },
  });

  return {
    districts: data?.districts,
    loading,
    error: Boolean(error),
  };
}
