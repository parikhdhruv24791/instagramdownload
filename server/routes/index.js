var request = require('request');
var cheerio = require('cheerio');

module.exports = function(app) {


    // This responds with "Hello World" on the homepage
    app.get('/', function(req, res) {
        console.log("Got a GET request for the homepage");
        res.send('Hello GET');
    });

    app.get('/getNews', function(req,res){
    	url = 'http://news.google.com/';

	    // The structure of our request call
	    // The first parameter is our URL
	    // The callback function takes 3 parameters, an error, response status code and the html

	    request(url, function(error, response, html){

	        // First we'll check to make sure no errors occurred when making the request
			var list = [];
	        if(!error){
	            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
	            
	            var $ = cheerio.load(html);
	            $(".esc-lead-article-title").filter(function(){
	            	var data = $(this);
	            	var title = data.children().first().text();
	            	list.push({title:title, href:data.children().first().attr("href")});
	            });
	        }
	        res.send({
	        	"list": list
	        });
	    })
    });

}
