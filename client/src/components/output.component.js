import { useDistrictsBy } from "../graphql/graphql.hooks";

export function OutputSection({ filterOptions }) {
  const { YEAR, REGION_ID, PROVINCE_ID, DISTRICT_ID, POP_ZONE } = filterOptions;
  const { districts, loading, error } = useDistrictsBy(
    YEAR,
    REGION_ID,
    PROVINCE_ID,
    DISTRICT_ID,
    POP_ZONE
  );
  return (
    <div className="bg-purple-200 w-full h-full flex flex-col">
      <h2>Output based on the given filters</h2>
      <div>Output will go here</div>
    </div>
  );
}
