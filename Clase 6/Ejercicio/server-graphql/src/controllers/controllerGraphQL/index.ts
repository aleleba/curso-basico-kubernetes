'use strict';

import { ObjectID } from 'mongodb';
import ProductosModel from '../../models';

const { insertProducto, getAllProductos, deleteProducto } = ProductosModel;

//Funcion para insertar un Producto en MongoDB
export const createProductoController = async (rootValue, args) => {

	const producto = args.producto;
	
	const promise = new Promise((resolve) => {
			
		const cb = (res, disconnect) => {
			//assert.equal(err, null);
			//console.log("Found the following records");

			console.log(res.insertedId.toString());

			resolve({
				producto: {
					id: res.insertedId.toString(),
					...producto
				},
				mensaje: 'Se inserto exitosamente el Producto'
			});
		
			//console.log(res)
			
			disconnect();
			
		};

		insertProducto(producto, cb);

	});

	const result = await promise; // wait till the promise resolves (*)

	//console.log(result); // "done!"

	return result;

};
//Termina Funcion para insertar un Producto en MongoDB

//Funcion para traer todos los Productos
export const getProductosController = async () => {

	const promise = new Promise((resolve) => {

		const cb = (err, res, disconnect) => {
			if(err){
				new Error('No hay registros de Productos');

				disconnect();

			}else{

				const data = res.map( producto => {

					const productoReturn = {
						...producto,
						id: producto._id,
					};

					delete productoReturn['_id'];

					return productoReturn;

				});

				resolve(data);

				disconnect();

			}
		};

		getAllProductos(cb);

	});

	const result = await promise; // wait till the promise resolves (*)

	//console.log(result); // "done!"

	return result;
};
//Termina Funcion para traer todos los Productos

//Funcion para Eliminar un Objetivo en MongoDB
export const deleteProductoController = async (rootValue, args) => {

	const id = args.id;

	const promise = new Promise((resolve) => {

		const cb = (res, disconnect) => {
			//console.log(res)
			if (res) {
				//assert.equal(1, res.deletedCount);
				resolve(`Se eliminó exitosamente el Producto con id: ${id}`);
				disconnect();
			} else { 
				resolve('No se eliminó el Producto');
				disconnect();
			}

		};

		deleteProducto(cb, new ObjectID(id));

	});

	const result = await promise; // wait till the promise resolves (*)

	//console.log(result); // "done!"

	return result;

};
//Termina Funcion para Eliminar un Objetivo en MongoDB
