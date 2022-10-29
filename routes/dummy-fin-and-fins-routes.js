const express = require("express");
const router = express.Router();
const { fetchHeroBannerItems, createHeroBannerItem } = require("../controllers/dummy-fin-and-fins-controller");

router.route(`/`).get(fetchHeroBannerItems).post(createHeroBannerItem);

module.exports = router;
