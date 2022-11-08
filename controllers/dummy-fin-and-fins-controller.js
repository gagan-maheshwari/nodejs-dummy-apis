const asyncHandler = require("express-async-handler");
const HeroBannerItem = require("../models/hero-banner-item-model");
const Product = require("../models/product");

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

const createProduct = asyncHandler(async (req, res) =>
{
	const product = await Product.create(req.body);

	res.status(201).json(
		{
			product
		});
});

const fetchProducts = asyncHandler(async (req, res) =>
{
	const products = await Product.find();

	res.status(200).json(
		{
			products
		});
});

module.exports =
{
	fetchHeroBannerItems, createHeroBannerItem, createProduct, fetchProducts
};
