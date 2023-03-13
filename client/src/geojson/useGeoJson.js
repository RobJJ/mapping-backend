import { useState, useCallback, useEffect } from "react";
import { httpGetGeoJsonData, httpGetGeoJsonVietnam } from "./requests";

function useGeoJson() {
  const [geoJsonData, setGeoJsonData] = useState([]);
  const [geoVietnam, setGeoVietnam] = useState([]);

  const getGeoJsonData = useCallback(async () => {
    // console.log("calling getGeoJsonData!!");

    const fetchedData = await httpGetGeoJsonData();
    setGeoJsonData(fetchedData);
  }, []);

  const getGeoVietnam = useCallback(async () => {
    const fetchedData = await httpGetGeoJsonVietnam();
    setGeoVietnam(fetchedData);
  }, []);

  useEffect(() => {
    getGeoVietnam();
  }, [getGeoVietnam]);

  useEffect(() => {
    getGeoJsonData();
  }, [getGeoJsonData]);

  return { geoJsonData, geoVietnam };
}

export default useGeoJson;
