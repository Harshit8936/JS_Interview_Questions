let name = "harshitbhargav".split('');  
name = name.sort();
let obj = {}
for(let i=0;i<name.length;i++)
{
    const char = name[i];
    if(obj[char]){
        obj[char]++
    }else{
        obj[char] = 1
    }
}
console.log(obj)