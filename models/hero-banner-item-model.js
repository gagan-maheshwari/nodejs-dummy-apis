const mongoose = require("mongoose");

const heroBannerItemSchema = mongoose.Schema(
	{
		smallText:
		{
			type: String
		},
		largeText1:
		{
			type: String
		},
		midText:
		{
			type: String
		},
		image:
		{
			type: String
		},
		slug:
		{
			type: String
		},
		buttonText:
		{
			type: String
		},
		desc:
		{
			type: String
		}
	},
	{
		timestamps: true
	});

module.exports = mongoose.model("HeroBannerItem", heroBannerItemSchema);
