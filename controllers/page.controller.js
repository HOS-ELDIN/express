const home = (req, res) => {
	// res.send("home page from controller");
	res.render("index.ejs");
};
const about = (req, res) => {
	// res.send("about page from controller");
	res.render("about.ejs");
};
const contact = (req, res) => {
	// res.send("contact page from controller");
	res.render("contact.ejs");
};
const post = (req, res) => {
	// res.send("post page from controller");
	res.render("post.ejs");
};

module.exports = {
	home,
	about,
	contact,
  post
};
