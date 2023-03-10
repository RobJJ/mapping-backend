import { useEffect } from "react";
import { useDistrictsBy } from "../../graphql/graphql.hooks";

export function OutputSection({ filterOptions }) {
  const { YEAR, REGION_ID, PROVINCE_ID, DISTRICT_ID, POP_ZONE } = filterOptions;
  const { districts, loading, error } = useDistrictsBy(
    YEAR,
    REGION_ID,
    PROVINCE_ID,
    DISTRICT_ID,
    POP_ZONE
  );

  // useEffect(() => {
  //   console.log("Output rerendered");
  // }, [filterOptions]);

  if (loading) {
    return <div>Loading the data...</div>;
  }

  if (error) {
    console.error("Error: ", error);
    return <div>Theres a error my dude...</div>;
  }
  if (districts) {
    console.log("your data dude: ", districts);
    return (
      <div className="bg-purple-200 w-full h-full flex flex-col">
        <h2>Output based on the given filters</h2>
        <div>Data is being rendered!</div>
      </div>
    );
  }
}
