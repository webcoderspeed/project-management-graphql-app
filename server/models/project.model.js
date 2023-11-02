import { Schema, model, Types } from 'mongoose';

const { ObjectId } = Types;

const projectSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ['Not Started', 'In Progress', 'Completed'],
	},
	clientId: {
		type: ObjectId,
		ref: 'Client',
	},
});

const Project = model('Project', projectSchema);

export default Project;
