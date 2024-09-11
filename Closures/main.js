
    /*The javascript clourse gives you access to an outer 
    function's scope from an inner function */


// example-1
function outerFunction(){
    let OFun = 'hi';
    console.log(OFun);

    function innerFunction(){
        let IFun= 'chezhiya ';
        console.log(OFun,IFun)
    }
    innerFunction();
}
 outerFunction();

// Example-2

function sumPrice(Mobile){
    console.log("Mobile price : " , Mobile);
    return function(Laptop){
        console.log("Laptop price : ", Laptop);
        let Price = Mobile + Laptop;
        return Price;
    }
}

let reference = sumPrice(12000);
let TotalPrice= reference(61500);
console.log("Total Price : " ,TotalPrice);
// console.log(reference);