let port = 3000;
let express = require('express');
let app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file
//render index page
app.get('/', function(req, res) {
	let drinks = [
		{ name: 'Bloody Mary', drunkness: 3 },
		{ name: 'Martini', drunkness: 5 },
		{ name: 'Scotch', drunkness: 10 }
	];
	let tagline = 'I never make the same mistake twice. I make it like five or six times, you know, to be sure.';

	res.render('pages/index', {
		drinks: drinks,
		tagline: tagline
	});
});

//about page
app.get('/about', (req, res) => {
	res.render('pages/about');
});

app.listen(port);
console.log(`listening on port ${port}`);
