const express = require("express");
const router = express.Router();
const { fetchHeroBannerItems, createHeroBannerItem, createProduct, fetchProducts } = require("../controllers/dummy-fin-and-fins-controller");

router.route(`/`).get(fetchHeroBannerItems).post(createHeroBannerItem);
router.route(`/product`).get(fetchProducts).post(createProduct);

module.exports = router;
