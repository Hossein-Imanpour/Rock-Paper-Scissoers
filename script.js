const Choices = ["rock" , "paper" , "scissors"];
 
const userChoice = prompt(" rock , paper  , scissors ");

if(userChoice){
    console.log(` your choice is :  ${userChoice}`)
}else{
    console.log(' تقلب  نکن !!')
}

let randomNumber = Math.floor(Math.random() * 3);
let ComputerChoice = Choices[randomNumber];
console.log(`computerChoice is :  ${ComputerChoice}`)


if(ComputerChoice === userChoice){
    console.log("مساوی شدین ! ! !");
    document.getElementById("demo").innerHTML = "مساوی شدین ! ! !";
}else if(userChoice === "rock"){
    if(ComputerChoice === "scissors"){
        console.log("برنده شدی ! ! !");
    document.getElementById("demo").innerHTML = "برنده شدی ! ! !";
    document.getElementById("demo").style.color = "green"
    }else{
        console.log("باختی ! ! !");
        document.getElementById("demo").innerHTML ="باختی ! ! !";
        document.getElementById("demo").style.color = "red"
    }
}else if(userChoice ===  "paper"){
    if(ComputerChoice === "rock"){
        console.log("برنده شدی ! ! !");
        document.getElementById("demo").innerHTML = "برنده شدی ! ! !";
        document.getElementById("demo").style.color = "green"
    }else{
        console.log("باختی ! ! !");
        document.getElementById("demo").innerHTML ="باختی ! ! !";
        document.getElementById("demo").style.color = "red"
    }
}else if(userChoice === "scissors"){
    if(ComputerChoice === "paper"){
        console.log("برنده شدی ! ! !");
        document.getElementById("demo").innerHTML = "برنده شدی ! ! !";
        document.getElementById("demo").style.color = "green"
    }else{
        console.log("باختی ! ! !");
        document.getElementById("demo").innerHTML ="باختی ! ! !";
        document.getElementById("demo").style.color = "red"
    }
}
