const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		name:
		{
			type: String
		},
		stars:
		{
			type: Number
		},
		description:
		{
			type: String
		},
		price:
		{
			type: Number
		},
		slug:
		{
			type: String
		},
		images:
		{
			type: [String]
		}
	},
	{
		timestamps: true
	});

module.exports = mongoose.model("Product", productSchema);
