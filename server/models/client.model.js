import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
});

const Client = model('Client', clientSchema);

export default Client;
