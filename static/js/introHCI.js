'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		var testjsButton = $("#testjs");
		//console.log("button is " + testjsButton.length);
		testjsButton.text("Please wait...");

		$(".jumbotron p").toggleClass("active");
	});


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(myClickFunction);
}

function projectClick(e) { 
	 // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    //var jumbotronHeader = $("#jumbotron h1");
    var jumbotronHeader = $(".jumbotron h1");
    //console.log("num jumbotroHeaders is " + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>"); keeping for reference

       description.fadeToggle();
       //description.legth = 0;
       //description.remove();
    }
}

function myClickFunction(e) {
 	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    var project = $("#project").val();
    // project = "#project5";
    // $(project) = $("#project5")

    $(project).animate({
    	width: $("#width").val()
    });

    $(project).find(".project-description").text($("#description").val());
 
    //var projectTitle = project.find(".form-control");
    //console.log("title is " + projectTitle.length);
    //var newSize = 
    //var newText = 

}

















