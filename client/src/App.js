import { ApolloProvider } from "@apollo/client";

import { client } from "./graphql/graphql.queries";
import { MainPage } from "./pages/mainPage";
import { MapPage } from "./pages/mapPage";
import useGeoJson from "./geojson/useGeoJson";

function App() {
  const { geoJsonData, geoVietnam } = useGeoJson();
  // console.log(geoVietnam);
  return (
    <ApolloProvider client={client}>
      <div className=" w-screen h-screen p-5">
        {!geoJsonData && <div>Loading...</div>}
        {geoJsonData && <MapPage data={geoJsonData} datatwo={geoVietnam} />}
      </div>
    </ApolloProvider>
  );
}

export default App;
