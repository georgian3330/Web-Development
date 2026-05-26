// String Concatenation

alert("Hello " + "World");

var msg = "Today's weather is sunny" + " and bright.";
console.log(msg);


// String Length
console.log(msg.length); // returns the size of the string

// Tweeter Word Limit Challenge (max. 140 words)
var tweet = prompt("Write your message:");
var count = tweet.length;
var remaining_size = 140 - count;
console.log(remaining_size + "words remaining");

// String Slicing (var_name.slice(starting_position, last_position_exclusive))
console.log("Your tweet message is: " + tweet.slice(0, 141));
alert(tweet.slice(0, 141));


// String to Upper Case
uppercase_tweet = tweet.toUpperCase();

// String to Lower Case
lowercase_tweet = tweet.toLowerCase();