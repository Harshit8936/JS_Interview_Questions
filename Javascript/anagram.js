function areAnagram(str1,str2){
  str1 = str1.toLowerCase().split('');
  str2 = str2.toLowerCase().split('');
  if(str1.length!==str2.length){
    return console.log("Not valid string")
  }
  str1 = str1.sort();
  str2 = str2.sort();
  for(let i=0;i<str1.length;i++){
    if(str1[i]!==str2[i]){
    return console.log('Strings are not anagram')
    }
  }
  console.log('Strings are anagram')
}

areAnagram('LISTEN','SILENT')
// tea eat
// race care

  /*
  function areAnagram(str1,str2){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length!==str2.length) return false;
  
  return str1.split("").sort().join("")===str2.split("").sort().join("")
}

console.log(areAnagram('LISTEN','SILENT'))
  
  
  */