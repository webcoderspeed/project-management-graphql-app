import mongoose from 'mongoose';
import { MONGO_URL } from '../constants/index.js';


const connectDB = async () => {
	const connection = await mongoose.connect(MONGO_URL);

	console.log(
		`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold,
	);
};

export default connectDB;
