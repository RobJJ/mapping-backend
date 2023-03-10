import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/graphql.queries";
import { MainPage } from "./pages/mainPage";
import { MapPage } from "./pages/mapPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-blue-200 w-screen h-screen">
        <MapPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
