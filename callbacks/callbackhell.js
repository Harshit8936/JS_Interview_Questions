/*
    1:- 2s student roll
    2:- 2s name age
    3:- 2s gender
*/

const getRollNo = ()=>{
        setTimeout(() => {
            let roll = [1,2,3,4,5];
            console.log(roll);

            setTimeout((no) => {
                const bioData = {
                    name:"HArs",
                    age:25
                }
                console.log(`My roll no is ${no} My name is ${bioData.name} and Age is ${bioData.age} old `);

                setTimeout((data) => {
                    bioData.gender = "Male";
                    console.log(`My roll no is ${no} My name is ${data.name} and Age is ${data.age} old and Gender is ${data.gender} `);
                }, 2000,bioData);
            }, 2000,roll[1]);
            
        }, 2000);
}
getRollNo()