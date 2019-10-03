var print = console.log;
//console.log("Hello JS");

//print("Hello");
var variable;

variable=10;
print(variable);
variable = 10.1;
print(variable);
variable = "String";
print(variable);
variable=true;
variable =null;

print(variable);

function sayHie(whatTosay){
    print("Hii" + whatTosay );

}

print(sayHie("Steve"));

var arr = [1,undefined,1.1,"String",
function sayHi(){
   return "I just said Hii" ;
},[1,2,3,4,5,6,7,8],{
    name:"Steve"
},null
];
print (arr);

//print(arr[4]());

var cap={
    name: "steve" ,
    lastname: "Rogers",
    address:{
        state: "newYork",
        cit: "manhattan"

    }

};
print (cap);
console.log( "Before actual work");
//block main thread
function sayHiii()
{
    console.log("I just said Hii");
}
//blocking code
setTimeout(sayHiii, 3000)
console.log("After actual work");

for(var i=0;i<=1000;i++)
{
   // console.log(i);
}









