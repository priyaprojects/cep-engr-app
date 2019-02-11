// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var candidate = new Object();
var candidate = {

	firstName: "Priya",
	lastName: "Pandian",
	jobTitle: "Test Engineer",
  homeOffice: "Austin",

}

// Here I grabbed each individual div and assigned information to each div from the candidate object
document.getElementById("fname").innerHTML = candidate.firstName;
document.getElementById("lname").innerHTML = candidate.lastName;
document.getElementById("jtitle").innerHTML = candidate.jobTitle;
document.getElementById("hoffice").innerHTML = candidate.homeOffice;

//jQuery functions to display information according to the instructions below
$(document).ready(function(){
    $(".fname").click(function(){
        $("#fname").slideDown("slow");
    });
});

$(document).ready(function(){
    $(".lname").click(function(){
        $("#lname").slideDown("slow");
    });
});

$(document).ready(function(){
    $(".jtitle").click(function(){
        $("#jtitle").slideDown("slow");
    });
});

$(document).ready(function(){
    $(".hoffice").click(function(){
        $("#hoffice").slideDown("slow");
    });
});
