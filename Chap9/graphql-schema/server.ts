import express from "express";
import { createServer } from "http"
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { execute, subscribe } from "graphql";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import cors from "cors";
import { PubSub } from 'graphql-subscriptions';


(async function () {
  const app = express();

  const httpServer = createServer(app)

  const pubsub = new PubSub();

  app.use(cors())

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res, pubsub })
  })

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false
  })

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: apolloServer.graphqlPath }
  );


  httpServer.listen({ port: 8000 }, () => {
    console.log(`🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`);
  })
})()
