import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from'../resolvers';
import Productos from './Productos.gql';

// The GraphQL schema
const rootTypes = `
  type Query {
    productos: [Producto]
  }
  type Mutation {
    productosMutation: ProductosMutation
  }
`;

const typeDefs = [ rootTypes, Productos ];

export default makeExecutableSchema({typeDefs, resolvers});