// 0,1,1,2,3,5,8,13,21

let n1=0, n2=1, n3, limit=10;
let arr = [n1,n2]

for(let i=2;i<limit;i++){
    n3 = n1+n2;
    n1 = n2
    n2 = n3
    arr.push(n3)
}
console.log(arr.join(", "))


// RECURSIVE
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n) {
    const series = [];
    for (let i = 0; i < n; i++) {
        series.push(fibonacci(i));
    }
    return series;
}

// Example usage:
const n = 10; // Number of terms
console.log(fibonacciSeries(n));

