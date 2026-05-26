// Example of Control Flow

    /*
    if(track === "clear"){
        goStraight();
    }
    else{
        turnRight();
    }
    */

// == Checks for equality and doesn't care about the datatype
// === Checks for equality along with the datatype

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;

if(loveScore > 70){
    console.log("Your lovescore is: " + loveScore + " %. You love each other like Kanye loves Kanye.");
}
if(loveScore < 30){
    console.log("Your lovescore is: " + loveScore + " %. You go together like oil and water.");
}

// Combining Comparators
/*

&& - AND
|| - OR
! - NOT

*/

if(loveScore >= 30 && loveScore <= 70){
    console.log("Your lovescore is: " + loveScore + "%.");
}