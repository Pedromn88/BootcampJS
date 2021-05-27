var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = () => document.getElementById("texto1").value;
var searchIndex = (str, value) => {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === value) return i;
    }
    return -1
}

var transformText = (text) => {
    var result= "";
    for (var i = 0; i< text.length; i++) {
        var indexPosition = searchIndex(plainAlphabet, text [i]);
        if (indexPosition > -1) {
        result = result + encryptedAlphabet[indexPosition];
    } else {
        result = result + text[i];
    }

    return result; 
}
}

var transformMessenger = message => {
    var messageLowerCase = message.toLowerCase();
    var result="";
    for (var value of messageLowerCase) {
        result = result + transformText(value)
    }
    return result;
}


var resultado = () => document.getElementById("resultado").innerText = transformMessenger(text);

document.getElementById("descrypt").addEventListener("click", resultado);

