import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { IS_PROD, PORT } from './constants/index.js';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/index.js';
import connectDB from './config/db.js';


const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: !IS_PROD }));

app.listen(PORT, async () => {
	await connectDB();

	console.log(`Server running on port ${PORT}`);
});
