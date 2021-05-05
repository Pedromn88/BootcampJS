//var number1 = () => parseInt(document.getElementById("numberA").value)
//var number2 = () => parseInt(document.getElementById("numberB").value)


//var sumNumber = () => number1() + number2()
//var restNumber = () => number1() - number2()
//ar multiNumber = () => number1() * number2()
//var diviNumber = () => number1() / number2()

//var showsuma = () =>
//document.getElementById("resultado").innerText = sumNumber();
//var showresta = () =>
//document.getElementById("resultado").innerText = restNumber();
//var showmulti = () =>
//document.getElementById("resultado").innerText = multiNumber ();
//var showdivision = () =>
//document.getElementById("resultado").innerText = diviNumber ();


//document.getElementById("suma").addEventListener("click", showsuma);

//document.getElementById("resta").addEventListener("click", showresta);

//document.getElementById("multi").addEventListener("click", showmulti);

//document.getElementById("division").addEventListener("click", showdivision);

//CALCULADORA SECUENCIAL


var numeroAnterior = document.getElementById("numero_anterior")
var numeroActual = document.getElementById("numero_actual").valor;

var sumNumber = () => numeroAnterior() + numeroActual()
var restNumber = () => numeroAnterior() - numeroActual()
var multiNumber = () => numeroAnterior() * numeroActual()
var diviNumber = () => numeroAnterior() / numeroActual()


var showsuma = () =>
document.getElementById("resultado").innerText = sumNumber();
var showresta = () =>
document.getElementById("resultado").innerText = restNumber();
var showmulti = () =>
document.getElementById("resultado").innerText = multiNumber ();
var showdivision = () =>
document.getElementById("resultado").innerText = diviNumber ();

document.getElementById("suma").addEventListener("click", showsuma);

document.getElementById("resta").addEventListener("click", showresta);

document.getElementById("multi").addEventListener("click", showmulti);

document.getElementById("division").addEventListener("click", showdivision);

