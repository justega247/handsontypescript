import { IResolvers } from '@graphql-tools/utils';
import { v4 } from "uuid"
import { todos } from './db';
import { GqlContext } from "./GqlContext";
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

interface User {
  id: string;
  username: string;
  email?: string;
}

interface Todo {
  id: string;
  title: string;
  description?: string;
}

const NEW_TODO = "NEW TODO";

const resolvers: IResolvers = {
  Query: {
    getUser: async (obj: any, args: { id: string; }, ctx: GqlContext, info: any): Promise<User> => {
      return {
        id: v4(),
        username: "dave"
      }
    },
    getTodos: async (parent: any, args: null, ctx: GqlContext, info: any): Promise<Array<Todo>> => {
      console.log("running getTodos");
      return todos;
    },
  },
  Mutation: {
    addTodo: async (parent: any, args: { title: string; description: string; }, ctx: GqlContext, info: any): Promise<Todo> => {
      const newTodo = {
        id: v4(),
        title: args.title,
        description: args.description
      }
      todos.push(newTodo);
      pubsub.publish(NEW_TODO, { newTodo });
      return todos[todos.length - 1];
    }
  },
  Subscription: {
    newTodo: {
      subscribe: () => {
        return pubsub.asyncIterator(NEW_TODO)
      }
    }
  }
};

export default resolvers;