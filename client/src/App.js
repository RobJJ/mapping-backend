import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/graphql.queries";
import { MainPage } from "./pages/mainPage";
import { MapPage } from "./pages/mapPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MapPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
