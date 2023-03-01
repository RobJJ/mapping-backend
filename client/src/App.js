import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/graphql.queries";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MainPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
