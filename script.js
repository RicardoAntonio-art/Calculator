let digitos = {
    posicion1: undefined,
    posicion2: undefined,
};

let calculadora = {
    operaciones: undefined,
};
const botones = document.querySelectorAll("#digit");
const operadores = document.querySelectorAll("#operator")


operadores.forEach( (operadores) => { 
    operadores.addEventListener("click", () =>{ 
        calculadora.operaciones = operadores.textContent;
        console.log(calculadora.operaciones);
    });
});


botones.forEach((botones) =>{ 
    botones.addEventListener("click",()=>{ 
        digitos.posicion1 = botones.textContent;
        console.log(digitos.posicion1);
    });
});

/*
const operators = document.querySelectorAll("#operator");
const pantalla = document.querySelector("#pantalla");
const resultado = document.querySelector("#equals");
const digitsPAN = document.createElement("p");


operators.forEach((operator) =>{ 
    operator.addEventListener("click", () => {
        operator = operator.textContent;         
        console.log(operator);
    });
});
*/


function suma (){ 
   return digit1+digit2; 
}



function operate(digits1,digits22,operator) { 

}