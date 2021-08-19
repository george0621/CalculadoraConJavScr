// DOM
// Document object model -> El navegador

const numero1 = document.querySelector('#txt-numero1');
const numero2 = document.querySelector('#txt-numero2');

const suma = document.getElementById('btn-suma');
const resta = document.getElementById('btn-resta');
const multiplicacion = document.getElementById('btn-multiplicacion');
const division = document.getElementById('btn-division');

const resultado = document.querySelector('#resultado');

suma.addEventListener('click', sumar);

function sumar() {
   const number1 = parseFloat(numero1.value);
   const number2 = parseFloat(numero2.value);
   const result = number1 + number2;
   resultado.textContent = result;
   resultado.style.color = 'red';   
}

resta.addEventListener('click', restar);

function restar() {
   const number1 = parseFloat(numero1.value);
   const number2 = parseFloat(numero2.value);
   const result = number1 - number2;
   resultado.textContent = result;
   resultado.style.color = 'red';   
}

multiplicacion.addEventListener('click', multiplicar);

function multiplicar() {
   const number1 = parseFloat(numero1.value);
   const number2 = parseFloat(numero2.value);
   const result = number1 * number2;
   resultado.textContent = result;
   resultado.style.color = 'red';   
}

division.addEventListener('click', dividir);

function dividir() {
   const number1 = parseFloat(numero1.value);
   const number2 = parseFloat(numero2.value);
   if (number2 == 0) {
      resultado.textContent = "La division por cero no esta definida"
      resultado.style.color = 'red'; 
   }
   else {
   const result = number1 / number2;
   resultado.textContent = result;
   resultado.style.color = 'red'; 
   }  
}