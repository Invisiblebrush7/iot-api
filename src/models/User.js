const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 1,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		max: 255,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		max: 255,
	},
	records: {
		type: Array,
		default: [],
	},
	typeOfUser: {
		type: String,
		enum: ['simple', 'premium'],
		default: 'simple',
	},
});

module.exports = mongoose.model('User', userSchema);
