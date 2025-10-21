const nestedObj = {
    "isbn": "123-456-789",
    "author": {
      "lastnameAuthor": "Doe",
      "firstnameAuthor": "Jane"
    },
    "editor": {
      "lastnameEditor": "Smith",
      "firstnameEditor": "Jane"
    },
    "title": "The Ultimate Database Study Guide",
    "category": {
        "production":"abc",
        "editor": {
            "lastnameEditorInside": "Smith",
            "firstnameEditorInside": "Jane"
          },
    }
  }


const flatJson = function(obj){
    const dummyJson = {};
    for(let key in obj){
        // console.log("key",key)
        const value = obj[key];
        // console.log(value);
        const type = typeof value;
        // console.log(type);
        if(['string','boolean'].includes(type) || (type == 'number' && !isNaN(value))){
            dummyJson[key] = value
        }else if(type==='object'){
            Object.assign(dummyJson,flatJson(value))
        }

    }
    return dummyJson

}

console.log(flatJson(nestedObj))