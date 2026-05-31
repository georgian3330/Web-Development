// https://jquery.com/
// https://developers.google.com/speed/libraries#jquery
// https://www.minifier.org/

/*
    jQuery() === $()
*/

$(document).ready(function(){
    $("h1").css("color", "red");
});

$("h1").addClass("big-title");

$(setTimeout(Disappear, 1000));

function Disappear(){
    $("h1").removeClass("big-title");
}

// Inserting multiple css style
$("h1").addClass("big-title margin-50");

// Checking whether the class is present or not
$("h1").hasClass("margin-50");

// Change text in the element
$("h1").text("I have changed the text from 'Hello'.");

// Change whole html 
setTimeout(changeHTML, 1000);

function changeHTML(){
    $("h1").html("<em>Hello</em>");
}

// Getting attribute
console.log($("img").attr("src"));

// Setting attribute
$("a").attr("href", "https://www.google.com");

// Adding Event Listeners
$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "purple");
    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
    $("h1").fadeOut();
    $("h1").fadeToggle();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").slideToggle();
    $("h1").animate({opacity : 0.5}); // Can only use CSS which has numeric value for CSS property
    // Chaining
    $("h1").slideUp().slideDown().animate({margin : "10%"});
});


// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
$("input").keypress(function(event){
    console.log(event.key);
});

// <$(document)> selects entire document
$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
});

$("h1").before("<button>Before</button><br>");
$("h1").prepend("<button>Prepend</button>");

$("h1").after("<button>After</button><br>");
$("h1").append("<button>Append</button>");


// https://www.w3schools.com/jquery/jquery_ref_effects.asp
// https://api.jquery.com/slideDown/