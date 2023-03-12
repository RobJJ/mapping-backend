import { ApolloProvider } from "@apollo/client";
import useGeoJson from "./geojson/useGeoJson";
import { client } from "./graphql/graphql.queries";
import { MainPage } from "./pages/mainPage";
import { MapPage } from "./pages/mapPage";

function App() {
  const { geoJsonData } = useGeoJson();
  // console.log(geoJsonData);

  return (
    <ApolloProvider client={client}>
      <div className=" w-screen h-screen p-5">
        {!geoJsonData && <div>Im the loading page...</div>}
        {geoJsonData && <MapPage geoData={geoJsonData} />}
      </div>
    </ApolloProvider>
  );
}

export default App;
