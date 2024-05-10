//Comparing 2 JSONS with same properties without order

var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

console.log(isEqualsJson(obj1,obj2));


//REST API

//Step 1: Creating an XHR object
var req = new XMLHttpRequest();

//Step 2: Opening the request
req.open("GET","https://restcountries.com/v3.1/all");

//Step 3: Kickstarting a request
req.send();

//Step 4: Onload event
req.onload = function(){
    var arr = JSON.parse(req.response); //array of objects

    //Display the Flags
    arr.forEach((ele) => {
        const flag = ele.flags.png;
        console.log(flag);
    });

    //Display Names,Regions,Sub-regions and Populations
    arr.forEach((ele) => {
        const name = ele.name.common;
        const reg = ele.region;
        const subReg = ele.subregion;
        const pop = ele.population
        console.log(name,reg,subReg,pop);
    });
}
