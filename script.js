let num1;
let num2;
let operator;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{ 
    button.addEventListener("click",()=>{ 
    console.log(button.textContent);
    });
});

function operate(num1,num2,operator) { 

}