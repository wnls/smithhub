/* username, password, email, class year, major, account status */
/* {username: , password: 000000, classyear: 2014, major: , acc_status: normal}*/
var profile = [
{username: "wyu", password: 000000, classyear: 2014, major: ["computer science"], acc_status: "normal"},
{username: "jizhang", password: 000000, classyear: 2014, major: ["biochemistry"], acc_status: "normal"},
{username: "ytun", password: 000000, classyear: 2014, major: ["engineering"], acc_status: "normal"}
];
/* username, category, item id, browse date */
//var history = [];

/* username, category, item id, date */
var watchlist = [
{username: "wyu", cat: "book", itemid:0, watchdate: new Date()},
{username: "wyu", cat: "book", itemid:1, watchdate: new Date()}
];

var notification_settings = [];

exports.getUser = function(username){
	return profile[0];
}

exports.getWatchList = function(username){
	var list = [];
	for (var i=0; i<watchlist.length; i++) {
		if (watchlist[i].username == username){
			list.push(watchlist[i]);
		}
	}
	return list;
}
