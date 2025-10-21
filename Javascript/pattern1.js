// print number

for(var i=1;i<=5;i++){
    let str=""
    for(var j=1;j<=i;j++){
        str += j
    }
    console.log(str)
}

// print pattern
for(var i=1;i<=3;i++){
    let str=""
    for(var j=1;j<=i;j++){
        str += "*"
    }
    console.log(str)
}

// print opposite to above
for(var i=1;i<=3;i++){              
    let str="";
    for(var j=3;j>=i;j--){          // for(var j=1;j<=4-1;j++)
        str+="*"
    }
    console.log(str)
}



// print 
/*
111
222
333
*/
for (var i=1;i<=3;i++){
    let str="";
    for(var j=1;j<=3;j++)
    {
        str += i
    }
    console.log(str)
}

// 3. Pyramid Pattern:
for(let i=1;i<=5;i++){
    let str = ""
    for(let j=i;j<=5;j++){
        str += " "
    }
    for(let k=1;k<= (2*i-1);k++){
        str += "+"
    }
    console.log(str)
}

// 4. Diamond Pattern (with stars):
let rows = 5; // Number of rows for half of the diamond

// Upper half of the diamond
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    
    // Adding spaces before stars
    for (let j = i; j < rows; j++) {
        pattern += ' ';
    }
    
    // Adding stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
    }
    
    console.log(pattern);
}

// Lower half of the diamond
for (let i = rows - 1; i >= 1; i--) {
    let pattern = '';
    
    // Adding spaces before stars
    for (let j = rows; j > i; j--) {
        pattern += ' ';
    }
    
    // Adding stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
    }
    
    console.log(pattern);
}


