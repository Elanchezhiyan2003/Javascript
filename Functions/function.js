function samsung(){
    console.log('This is Samsung Phone')
}

samsung()

let a=11;
let b=15;

function add(){
    console.log(a+b)
}

add()

let actor= 'Dhoni';
let player= 'Dhoni';
let movie= 'MS Dhoni';

function favourite(){
    console.log('Favourite Actor:' + actor)
    console.log('Favourite player:' + player)
    console.log('Favourite movie:' + movie)
}
favourite()

// Parameter parsing
function area(lenght,breadth){
    console.log('Area is:' + lenght*breadth)
}

area(10,20)

//return 

function myname(){
    return 'chezhiyan';
}

let ab=myname();

console.log(ab);

function adds(a,b){
    return(a+b)
}

var total= adds(10,20)
console.log(total)

// Callback functions -A callback function in JavaScript is a function that is passed as an argument to another function


function sum(a,b ,Callback){
    let out= a+b;
    Callback(out)
}

function display(out){
    document.write(out);
}
sum(10,20,display)

/////ex-2

function getInput(get){
    let name= prompt("Enter ypur name:")
    get(name);  
}

function outInput(view){
    document.write(view);
}

getInput(outInput);

// normal function
function myFun(){
    console.log("This is normal function");
}

myFun()

//// Anonymous Function

let myJs= function(){
    console.log("This is anonymous Function")
}
myJs();

/// Arrow Function
//ex-1
let Mych=()=> "This is arrow function";
console.log(Mych());

//ex-2
let MyCh=(Name)=> "Name: " +Name ;
console.log(MyCh("Elanchezhiyan"));

//ex-3 Using 2 arguments
let MyCh1=(Name1,Name2)=> "Brothers: " + Name1 + Name2 ;
console.log(MyCh1("Elanchezhiyan ", "Yogaraj"));

// object literals

var MyFun3= (Name, Address)=>{
    var data={MyName:Name,MyAddress:Address};
    console.log(data.MyName,data.MyAddress);
};

MyFun3('chezhiyan ','namakkal');