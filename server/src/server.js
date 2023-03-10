require("dotenv").config();
const path = require("path");
const colors = require("colors");
//
// import { readFile } from "fs/promises";
const { readFile } = require("fs/promises");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { mongoConnect } = require("./services/mongo");
const { geoRouter } = require("./routes/geojson.router");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PORT = process.env.PORT;

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function startApolloServer() {
  const app = require("./app.js");

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema: schema,
    // context will go here later
  });

  // still going to connect to mongo here for DB
  await mongoConnect();

  await server.start();
  // new apollo version 4
  // tell express to forward any requests at this path to apolloServer!
  // context will be 2nd para later
  app.use("/graphql", expressMiddleware(server));
  app.use("/geo", geoRouter);
  // old apollo way V3 ---> connect the middleware with express server
  //   server.applyMiddleware({
  //     app: app,
  //     path: "/graphql",
  //   });

  app.listen(PORT, () => {
    console.log(`Running graphQL apollo server...`.magenta);
    console.log(`Server running on port ${PORT}`.magenta);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`.magenta);
  });
}

startApolloServer();
