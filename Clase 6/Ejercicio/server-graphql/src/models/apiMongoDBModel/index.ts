'use strict';

import conn from './config/apiMongoDB-connection';

export const insertProducto = (data, cb) => {

	async function callback (db, disconnect) {
		// Insert a single document
		await db.collection('Productos')
			.insertOne(data)
			.then( res => cb(res, disconnect));
	}

	conn(callback);

};

export const getAllProductos = (cb) => {

	async function callback(db, disconnect) {
  
		// Insert a single document
		await db.collection('Productos')
			.find()
			.limit(0)
			.toArray( (err, res) => {
				cb(err, res, disconnect);
			});
  
	}
  
	conn(callback);
  
};

export const deleteProducto = (cb, id) => {

	async function callback (db, disconnect) {

		// Insert a single document
		await db.collection('Productos')
			.deleteOne({ _id: id })
			.then( res => cb(res, disconnect));
    
		//.updateOne({ _id: data.id }, { $set: { estado: data.estado} })

	}

	conn(callback);

};