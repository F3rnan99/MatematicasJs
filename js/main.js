function opBasicas(){
alert("Por favor ingrese un valor:");
let a = 0;
let b = 0;
let s = 0;
let d = 0;
let r = 0;
let m = 0;

a = parseInt(prompt("Por  favor ingrese un valor:"))
b = parseInt(prompt("Por favor ingrese un valor:"))
s = a + b;
alert("Su resultado es: " + s);

a = parseInt(prompt("Por  favor ingrese un valor:"))
b = parseInt(prompt("Por favor ingrese un valor:"))
s = a / b;
alert("Su resultado es: " + s);

a = parseInt(prompt("Por  favor ingrese un valor:"))
b = parseInt(prompt("Por favor ingrese un valor:"))
s = a - b;
alert("Su resultado es: " + s);

a = parseInt(prompt("Por  favor ingrese un valor:"))
b = parseInt(prompt("Por favor ingrese un valor:"))
s = a * b;
alert("Su resultado es: " + s);
}

function mayorD(){
  let a = 0;
  let b = 0;

  a = parseInt(prompt("Por favor ingrese un valor:"));
  b = parseInt(prompt("Por favor ingrese un valor:"));
  if  ( a == b)
    alert("Los números ingresados son iguales.")
    else if (a>b){
      alert(a + " Es mayor que " + b)
    }
    else{
      alert(b + " Es mayor que " + a)
    }
}

function mayor(){
  let a = 0;
  let b = 0;
  let c = 0;

  a = parseInt(prompt("Por favor ingrese un valor:"));
  b = parseInt(prompt("Por favor ingrese un valor:"));
  c = parseInt(prompt("Por favor ingrese un valor:"));
  if  ( a == b && a == c)
    alert("Los números ingresados son iguales.")
    else if (a<b && a<c && b<c){
      alert(a + " Es menor que " + b)
    }
    else{
      alert(b + " Es menor que " + a)
    }
}

function nacer()
{
  let a;
  let actual;
  let resu;
  
  actual = parseInt(prompt("Ingrese el año actual ="))
  a = parseInt(prompt("Ingrese su edad ="))
  resu = actual - a;

  alert ("El año de su nacimiento es " + resu)
}

function invertir()
{
  let capital;
  let operacion;
  let total;
  let años;

  capital = parseInt(prompt("Ingrese el capital que desea invertir = "));
  años = parseInt(prompt("Ingrese los años invertidos ="));

  operacion = ((capital * 0.017)*12) * años;
  total = capital + operacion;
  alert("usted invirtio = " + capital);

  if(años == 1)
  {
    alert("El pago que le hace el banco alrededor de "+años+" año, le hace el pago de "+operacion);
    alert("El total de su inversion es de "+total);
  }
  else
  {
    alert("El pago que le hace el banco de "+años+" años, le hace el pago de "+operacion);
    alert("El total de su inversion es de "+total);
  }
}

function colegio()
{
  let cal1;
  let cal2;
  let cal3;
  let cal4;
  let cal5;
  let cal6;
  let cal7;
  let mat;
  let nombre;
  let prom;
  let estado;

  nombre = prompt("Ingrese el nombre completo del estudiante =");
  mat = prompt ("Ingrese el nombre de la materia =")
  alert ("Ingrese las calificaciones (1-10) =")
  cal1 = parseFloat(prompt ());
  cal2 = parseFloat(prompt ());
  cal3 = parseFloat(prompt ());
  cal4 = parseFloat(prompt ());
  cal5 = parseFloat(prompt ());
  cal6 = parseFloat(prompt ());
  cal7 = parseFloat(prompt ());

  prom = (cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7) / 7;

  if(prom > 6)
  {
    estado = "aprobado";
  }
  else
  {
    estado = "desaprobado";
  }
  
  alert ("El estudiante " + nombre + " ha " + estado + " la materia " + mat + " con un promedio de " + prom)
}

function mercado ()
{
  let kg;
  let precio;
  let producto;
  let descuento;

  producto = prompt("Ingrese el nombre del producto =")
  precio = parseInt(prompt("Ingrese el precio del producto ="))
  kg = parseFloat(prompt("Ingrese cuanto pesa el producto (Kg) ="))

  if (kg <= 2)
  {
    descuento = 0;
  }
  else if ((kg >2) && (kg <=5 ))
  {
    descuento = 0.10;
  }
  else if ((kg > 5)&&(kg <= 10))
  {
    descuento = 0.15;
  }
  else if (kg >10)
  {
    descuento = 0.20;
  }
}
function suma(){
  var A = 0;
  var B = 0;
  var suma = 0;

  A =parseInt(prompt("Ingrese el primer valor"));

  alert("Ingrese el segundo valor");
  B =parseInt(prompt(""));

  suma = A + B
  
  alert("El resultado de la suma es "+suma)

}
function opBasicas(){
  var A = 0;
  var B = 0;
  var suma = 0;
  var resta = 0;
  var mult = 0;
  var div = 0;

  A = parseInt(prompt("Ingrese el primer valor"));
  B = parseInt(prompt("Ingrese el segundo valor"));

  suma = A + B;
  resta = A - B;
  mult = A * B;
  div = A / B;

  alert("El resultado de la suma es "+suma);
  alert("El resultado de la resta es "+resta);
  alert("El resultado de la multiplicacion es "+mult);
  alert("El resultado de la division es "+div);
}
function comparacion1(){
  var A = 0;
  var B = 0;

  A = parseInt(prompt("Ingrese el primer valor"));
  B = parseInt(prompt("Introduzca el segundo valor"));

  if(A == B){
      alert ("Los numeros ingresados son iguales");
  }
  else if(A < B){
      alert (B+" es mayor que "+A);
  }
  else{
      alert (A+" es mayor que "+B);
  }
}
function comparacion2(){
  var A = 0;
  var B = 0;
  var C = 0;

  A = parseInt(prompt("Ingrese el primer valor"));
  B = parseInt(prompt("Ingrese el segundo valor"));
  C = parseInt(prompt("Ingrese el tercer valor"));

  if((A == B) && (B == C)){
      alert("Los numeros ingresados son iguales");
  }
  else if((A < B) && (B < C)){
      alert("El numero menor es: "+A);
  }
  else if((B < A) && (B < C)){
      alert("El numero menor es: "+B);
  }
  else if((C < A) && (C < B)){
      alert("El numero menor es: "+C);
  }
  else{
      alert("No se pudo establecer el numero menor");
  }
}
function par() {
  var A = 0;

  A = parseInt(prompt("Ingrese un valor:"));
  if(A % 2 === 0) {
  alert("El número ingresado es par");

  } 
  else {
      alert("El número es impar");
  }
  
}
function cuadrado(){
  const numero = prompt("Ingrese un número para calcular su cuadrado:");

  const cuadrado = numero * numero;
  
  alert("El cuadrado del número es: " + cuadrado);
}
function triangulo(){
      let base = parseInt(prompt("Ingrese la base del triangulo:"));
      let altura = parseInt(prompt("Ingrese la altura del triangulo:"));
      let area;
      area = (base * altura) / 2;
      alert("El area del triangulo es: " + area + " cm2");    
}
function cmAmts(){
var centimetros = prompt("Introduce un valor en centímetros:");
var metros = centimetros / 100;

alert(centimetros + " cm son " + metros + " m");

}
