const asyncHandler = require("express-async-handler");
const HeroBannerItem = require("../models/hero-banner-item-model");

const fetchHeroBannerItems = asyncHandler(async (req, res) =>
{
	const heroBannerItems = await HeroBannerItem.find();

	res.status(200).json(
		{
			heroBannerItems
		});
});

const createHeroBannerItem = asyncHandler(async (req, res) =>
{
	const heroBannerItem = await HeroBannerItem.create(req.body);

	res.status(201).json(
		{
			heroBannerItem
		});
});

module.exports =
{
	fetchHeroBannerItems, createHeroBannerItem
};
