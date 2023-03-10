import { useState, useCallback, useEffect } from "react";
import { httpGetGeoJsonData } from "./requests";

function useGeoJson() {
  const [geoJsonData, setGeoJsonData] = useState([]);

  const getGeoJsonData = useCallback(async () => {
    console.log("calling getGeoJsonData!!");

    const fetchedData = await httpGetGeoJsonData();
    setGeoJsonData(fetchedData);
  }, []);

  useEffect(() => {
    getGeoJsonData();
  }, [getGeoJsonData]);

  return { geoJsonData };
}

export default useGeoJson;
