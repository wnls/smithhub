/* books, electronics, furniture, clothes, stationary, other */
var category = [];

/* book id, title, isbn10, isbn13, author, translator, edition, publication year, condition, 
additional info, price, seller, post date, img */
var books = [
{id:0, cat:'book', title:"Artificial Intelligence", isbn10:0136042597, isbn13:9780136042594, 
author:["Stuart Russell","Peter Norvig"], translator: null, edition:3, pub_year: 2009, 
condition: "New", additional:null, price:25, seller:"jizhang", contact_count:0,
post_date: new Date(), img:["http://ecx.images-amazon.com/images/I/51bi4EnYE1L.jpg"]},

{id:1, cat:'book', title:"Economics Of European Integration", isbn10:null, isbn13:null, 
author:["Richard Baldwin"], translator: null, edition:4, pub_year: 2012, 
condition: "Like New", additional:null, price:30, seller:"ytun", contact_count:0, 
post_date: new Date(), mg:["http://ecx.images-amazon.com/images/I/51hKeD%2BVSXL.jpg"]},

{id:2, cat:'book', title:"Computer Networking: A Top-Down Approach", isbn10:0132856204, isbn13:9780132856201, 
author:["James F. Kurose","Keith W. Ross"], translator: null, edition:6, pub_year: 2012, 
condition: "Good", additional:null, price:35, seller:"ytun", contact_count:0,
post_date: new Date(), img:["http://ecx.images-amazon.com/images/I/51xfeAQU6dL.jpg"]}
];

/* category, item id, comment id, convo start, comment username, msg, date */
var comments = [];
/* book id, major, course number */
var courses = [
{bookid:0, dept:"CSC", cnum: 250},
{bookid:1, dept:"ECO", cnum:226},
{bookid:2, dept:"CSC", cnum:450}
];

exports.getItemInfo = function(cat, itemid){
	//console.log(cat+" "+itemid);
	return books[itemid];

}

exports.getCourse = function(bookid){
	return courses[bookid];
}