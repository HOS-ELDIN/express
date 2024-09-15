require("dotenv").config();

const express = require("express"),
	app = express(),
	port = process.env.PORT,
	expressLayout = require("express-ejs-layouts");

// static middleware
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(expressLayout);

app.use(require("./routes/route.js"));

app.listen(port, (req, res) => {
	console.log(`server running on port ${port}`);
});
