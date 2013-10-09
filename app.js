var http = require("http"),
	express = require("express"),
	app = express();

app.set("view engine", "jade")
app.set("views", "./views")
app.use(express.static("./public"))

app.get("/", function(req, res){
	var animes = [
		{
			name:"samurai x",
			url:"http://en.wikipedia.org/wiki/Rurouni_Kenshin"
		},
		{
			name:"dragon ball",
			url:"http://en.wikipedia.org/wiki/Dragon_Ball"
		}
	]

	res.render("home",{name:"kikyo", image:"b.jpg", animes:animes})
})

app.get("/contact", function(req, res){
	res.render("contact")
})

http.createServer(app).listen(3000, function(){
	console.log("Listen on port 3000")
})