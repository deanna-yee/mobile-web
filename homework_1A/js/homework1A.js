/*
	Deanna Yee
	deannayee@my.smccd.edu
	CIS 128
	homework1A.js
	homework 1A
	2/16/17
*/

$(function(){
	$("button").click(function(){
		$("img").css("border","solid 5px black");
		$("h1").css("color", "#9370DB");
		$("h1").animate({
			fontSize: "50px"
		}, 3000, function(){
			$("h1").animate({
				fontSize: "32px"
			},3000);
		});
	});
});