import * as dotenv from 'dotenv';

dotenv.config();

export const deFaultValues = {
	ENV: 'production',
	GRAPHIQL: 'false',
	PLAYGROUND_GRAPHQL: 'true',
	WHITELIST_URLS: 'http://localhost,http://localhost:4000',
	PORT: 4000,
};

export const config = {
	ENV: process.env.ENV,
	GRAPHIQL: process.env.GRAPHIQL === 'true' ? true : false,
	PLAYGROUND_GRAPHQL: process.env.PLAYGROUND_GRAPHQL === 'true' ? true : false,
	WHITELIST_URLS: process.env.WHITELIST_URLS ? process.env.WHITELIST_URLS.split(',') : deFaultValues.WHITELIST_URLS,
	PORT: process.env.PORT,
	mongoDBConfig: {
		host : process.env.HOST_MONGO,
		port : process.env.PORT_MONGO,
		db : process.env.DB_MONGO,
		user: encodeURIComponent(process.env.USER_MONGO),
		password: encodeURIComponent(process.env.PASSWORD_MONGO)
	},
};
