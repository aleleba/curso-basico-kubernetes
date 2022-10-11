'use strict';

import { createProductoController, deleteProductoController, getProductosController } from '../../controllers/controllerGraphQL';

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		// eslint-disable-next-line
		productos: (rootValue, args, context) => getProductosController(),
	},
	Mutation: {
		// eslint-disable-next-line
		productosMutation: (rootValue, args, context) => ({}),
	},
	ProductosMutation: {
		insertProducto: (rootValue, args) => createProductoController(rootValue, args),
		deleteProducto: (rootValue, args) => deleteProductoController(rootValue, args)
	}
};

export default resolvers;