
// DOM Manipulation
// var para = document.getElementById("one")
// console.log(para.textContent);
// para.textContent= "Bye World"

//
// let a=document.getElementById("num1")
// let b=document.getElementById("num2")
// let result = document.getElementById("result")

// function add(){
//     let num1value= Number(a.value)
//     let num2value= Number(b.value)
//     let total = num1value+num2value
//     result.textContent=total
// }
//  console.log(total)

///random number

// let number= Math.random()
// console.log(Math.floor(number*790) + 6234)

// Guess Game
// let guessnumber = document.getElementById("guessnumber")
// let result = document.getElementById("result")
// let score = document.getElementById("score")
// let randomNumber= Math.floor(Math.random()*10) + 1
// let totalscore = 10

// function check(){
//     let enternumber= guessnumber.Value
//     if(randomNumber == enternumber){
//         console.log('Win')
//         result.textContent='Win'
//         alert('You win')
//     } 
//     else{
//         totalscore= totalscore-1
//         score.textContent= "Score:" +totalscore
//         result.textContent='Loss'
//     }
// }
/// SetAttributes & Css

// let box = document.getElementById("box")

// function ChangeColor(){
//     box.style.backgroundColor='red'
//     box.setAttribute("class", "widthmax")
// }

let box= document.getElementById("inputBox")
let result = document.getElementById("result")

function output(){
    result.textContent=box.value
}




