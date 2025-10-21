import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return ( 
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;


for (var i = 0; i < 3; i++) {
    // setTimeout(function() {
        console.log(i); 
    // }, 1000);
}

// 3 3 3


function areAnagram(str1,str2){
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    if(str1.length!==str2.length){
        console.log("Strings are not valid");
        return;
    }
    str1= str1.sort();
    str2 = str2.sort();
    for(let i=0;i<str1.length;i++){
      if(str1[i]!==str2[i]){
        console.log("Strings are not anagram");
        return;
      }
    }
    console.log("Strings are anagram");
}

areAnagram('Listen','Silenn')




function flattenObject(obj, parentKey = '', separator = '_') {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.assign(acc, flattenObject(value, newKey, separator));
        } else {
            acc[newKey] = value;
        }
        return acc;
    }, {});
}


const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: [4, 5]
};
const flatObject = flattenObject(nestedObject);
console.log(flatObject);

// {'a':1,'b_c':2,'b_d_e':3,'f':[4,5]}






