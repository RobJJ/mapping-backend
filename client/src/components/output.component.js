import { useEffect } from "react";
import { useDistrictsBy } from "../graphql/graphql.hooks";

export function OutputSection({ filterOptions }) {
  useEffect(() => {
    console.log("Output rerendered");
  }, [filterOptions]);
  const { YEAR, REGION_ID, PROVINCE_ID, DISTRICT_ID, POP_ZONE } = filterOptions;
  const { data, loading, error } = useDistrictsBy(
    YEAR,
    REGION_ID,
    PROVINCE_ID,
    DISTRICT_ID,
    POP_ZONE
  );

  if (loading) {
    return <div>Loading the data...</div>;
  }

  if (error) {
    console.error("Error: ", error);
    return <div>Theres a error my dude...</div>;
  }

  return (
    <div className="bg-purple-200 w-full h-full flex flex-col">
      <h2>Output based on the given filters</h2>
      {data.map((district) => {
        return <div>{district.DISTRICT}</div>;
      })}
    </div>
  );
}
