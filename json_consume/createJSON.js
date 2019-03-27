// JavaScript Document
/*
	This file will:
	
	- Create a JS object including an array
	- Convert the JS object into a JSON object
	- Store the JSON object into local storage
	
	This will be given to students to run as part of a web page that will consume the JSON object
	Goal: Provide an example of how to create a JSON object in JS
	Goal: Provide an example of how to consume a JSON object in JS

*/

	//This will create a javascript object using javascript object notation
var student =
	{
		student_id:332443,
		student_gpa:3.6,
		student_courses:["WDV101","WDV131","WDV105"]
	};	//create a javscript object called student
	

var studentJSON = JSON.stringify(student);		//converts the javascript object INTO a JSON object

localStorage.setItem("student1",studentJSON);	//stores the JSON object in local storage
