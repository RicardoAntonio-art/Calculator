let digits1 = [];
let digits2 = [];
let operator;

const digits = document.querySelectorAll("#digit");
const operators = document.querySelectorAll("#operator");


operators.forEach((operator) =>{ 
    operator.addEventListener("click", () => {
        operator = operator.textContent;
        console.log(operator);
    });
});

digits.forEach((digits) =>{ 
    digits.addEventListener("click",()=>{ 
    let digits1 = digits.textContent;  
    console.log(digits1);
    });
});


function operate(digits1,digits22,operator) { 

}