const express = require("express"),
	router = express.Router(),
	pageController = require("../controllers/page.controller");

router.get("/", pageController.home);

router.get("/about", pageController.about);

router.get("/contact", pageController.contact);

router.get("/post", pageController.post);

module.exports = router;
