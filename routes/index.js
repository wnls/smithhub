
/*
 * GET home page.
 */

var loggedIn = "wyu";
var users = require('../lib/users');
var items = require('../lib/items');

var nodemailer = require("nodemailer");

exports.index = function(req, res){
	var user = users.getUser(loggedIn);

	var watchItems = users.getWatchList(loggedIn);
	var watchlist = [];
	watchItems.forEach(function(watchItem){
		watchlist.push(items.getItemInfo(watchItem.cat, watchItem.itemid));
	});
	//console.log();
  res.render('index', { 
  	title: 'Home',
  	loggedIn: user.username,
  	watchlist: watchlist,
	});
};

exports.book_detail = function(req, res){
	var id = req.params.id;
	var book = items.getItemInfo('book', id);
	var course = items.getCourse(id);
	res.render('book_detail', {
		title: 'Book Detail',
		loggedIn: loggedIn,
		item: book,
		course: course
	});
}

exports.contact = function(req, res){
	var msg = req.body.msg;
	var item = req.body.item;
	console.log("sent");
	res.send();
	//email
	/*var smtpTransport = nodemailer.createTransport("SMTP", {
	    service: "Gmail",
	    auth: {
	        user: "@gmail.com",
	        pass: ""
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "SmithHub <contact_seller@smithhub.com>", // sender address
	    to: "wyu@smith.edu", // list of receivers
	    subject: "Hello", // Subject line
	    text: msg, // plaintext body
	    //html: "<b>html</b>" // html body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    smtpTransport.close(); // shut down the connection pool, no more messages
	});*/

}