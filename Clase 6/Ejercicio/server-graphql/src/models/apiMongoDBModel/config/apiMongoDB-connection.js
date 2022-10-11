/* eslint-disable */
'use strict';

import { MongoClient } from 'mongodb';
import { config } from '../../../../config';

// Connection URL
// eslint-disable-next-line no-useless-escape
const url = `mongodb:\/\/${config.mongoDBConfig.user}:${config.mongoDBConfig.password}@${config.mongoDBConfig.host}:${parseInt(config.mongoDBConfig.port)}`;
const dbName = config.mongoDBConfig.db;
    
async function connect(cb) {

	const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

	try{
		await client.connect();
		console.log('conexion exitosa con mongoDB');

		const db = client.db(dbName);

		const disconnect = () => {
			// Close connection
			client.close( ()=>{
				console.log('desconexion exitosa con mongoDB');
			});
		};

		await cb(db, disconnect);

	}catch(err){
		console.log(err.stack);
	}
  
}

export default connect;
/* eslint-enable */