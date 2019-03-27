// JavaScript Document
/*
	This file will:
	
	- Create a JS object containaing an array of records with each record including an array
	- Convert the JS object into a JSON object
	- Store the JSON object into local storage
	
	This will be given to students to run as part of a web page that will consume the JSON object
	Goal: Provide an example of how to create a JSON object in JS
	Goal: Provide an example of how to consume a JSON object in JS

*/

	//This will create a javascript object using javascript object notation
var student1 =
	{
		student_id:332443,
		student_gpa:3.6,
		student_courses:["WDV101","WDV131","WDV105"]
	};	//create a javscript object called student
	
var student2 = 
	{
		student_id:545467,
		student_gpa:2.7,
		student_courses:["WDV101","WDV131","WDV105","WDV221","WDV205"]	
	}
	
var student3 = 
	{
		student_id:128574,
		student_gpa:3.4,
		student_courses:["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]				
	}

var student4 = 
	{
		student_id:750056,
		student_gpa:1.85,
		student_courses:["WDV101","WDV131","WDV105","WDV221","WDV205"]	
	}

var studentRecords = 
	{
		students:[student1,student2,student3,student4]	
	}


var studentRecordsJSON = JSON.stringify(studentRecords);		//converts the javascript object INTO a JSON object

localStorage.setItem("studentRecords",studentRecordsJSON);	//stores the JSON object in local storage
