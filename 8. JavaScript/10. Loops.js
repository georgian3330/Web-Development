// While Loop
var i = 1;

while(i < 11){
    console.log(i);
    i++;
}

// For Loop
for(var j = 1; j <= 10; j++){
    console.log(j);
}

// Fibonacci Series
function fibonacciGenerator (n) {
    if(n === 1){
        return [0];
    }
    else if(n === 2){
        return [0, 1];
    }
    else{
        var series = [0, 1];
        var t = 0;
        while(series.length < n){
            series.push(series[t] + series[t + 1]);
            t++;
        }
        return series;
    }
}
console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(3));
console.log(fibonacciGenerator(5));
console.log(fibonacciGenerator(8));