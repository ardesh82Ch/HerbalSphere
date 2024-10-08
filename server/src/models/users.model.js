import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			unique: true,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('User', userSchema);
