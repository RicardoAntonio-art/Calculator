/* let digitos = [];
let digito1 = digitos[0]
let calculadora = [];
let operador = calculadora [0];
let numero = undefined;

const botones1 = document.querySelectorAll("#digit");
const botones2 = document.querySelectorAll("#digit");
const operadores = document.querySelectorAll("#operator");
const resultado = document.querySelector("#equals");
const pantalla = document.querySelector("#pantalla");

botones1.forEach((botones1) =>{ 
    botones1.addEventListener("click",()=>{ 
        digitos[0] = botones1.textContent;
        digito1 = digitos [0];
        alert(digito1)
    });
});

operadores.forEach( (operadores) => { 
    operadores.addEventListener("click", () =>{ 
        calculadora[0] = operadores.textContent;
        
    });
});


resultado.addEventListener( "click", () => { 
    alert("funciona")
    operacion(digito1,operador);
});
/*
botones2.forEach( (botones2) => { 
    botones2.addEventListener("click", () => {
        digitos.posicion2 = botones2.textContent;
        operate(digitos.posicion2)
        console.log(digitos.posicion2);
    });
});



function operacion(digito1,operador) { 
    let result;
    switch (operador) {
        case '+':
            result = digito1 + 2;
            console.log(result);
            break;
            
        case '-':
            result = digito1 - 2;
            console.log(result);
            break;
        case '*':
            result = digito1 * 2;
            console.log(result);
            break;
        case '/':
            result = digito1 / 2;
            console.log(result);
            break;  
    }
    return result;
}
*/