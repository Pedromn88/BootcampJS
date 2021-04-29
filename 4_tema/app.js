var getName = () => document.getElementById("name").value;
var getSurname1 = () => document.getElementById("lastname1").value;
var getSurname2 = () => document.getElementById("lastname2").value;
var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();
var submitName = () => {
document.getElementById("full-name").innerText = getFullName();
};

document.getElementById("name").addEventListener("keyup", submitName);
document.getElementById("lastname1").addEventListener("keyup", submitName);
document.getElementById("lastname2").addEventListener("keyup", submitName);