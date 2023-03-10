import { GeoJSON } from "react-leaflet";
import useGeoJson from "../geojson/useGeoJson";

// import useGeoJson from "../geojson/useGeoJson";

export const MapComponent = () => {
  const { geoJsonData } = useGeoJson();

  if (!geoJsonData) return <div>Hey , we loading the data bitch!</div>;

  return (
    <>
      <GeoJSON
        // onEachFeature={onEachFeature}
        // style={style}
        data={geoJsonData}
        // data={districtGeoJSON}
        // ref={testRef}
      ></GeoJSON>
    </>
  );
};
