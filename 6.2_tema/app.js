var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//ENCRIPTAR

var text = () => document.getElementById("texto").value;

var searchIndex = (str, value) => {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === value) return i;
    }
    return -1
}

var transformTextEncrypt = (text) => {
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

var transformMessengerEncrypt = message => {
    var messageLowerCase = message.toLowerCase();
    var result="";
    for (var value of messageLowerCase) {
        result = result + transformTextEncrypt(value)
    }
    return result;
}


//DESCRYPT

/*var searchIndex = (str, value) => {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === value) return i;
    }
    return -1
}*/

var transformTextDescrypt = (text) => {
    var result= "";
    for (var i = 0; i< text.length; i++) {
        var indexPosition = searchIndex(encryptedAlphabet, text [i]);
        if (indexPosition > -1) {
        result = result + plainAlphabet[indexPosition];
    } else {
        result = result + text[i];
    }

    return result; 
}
}

var transformMessengerDescrypt = message => {
    var messageLowerCase = message.toLowerCase();
    var result="";
    for (var value of messageLowerCase) {
        result = result + transformTextDescrypt(value)
    }
    return result;
}

var resultadoEncrypt = () => document.getElementById("resultado").innerText = transformMessengerEncrypt(text);
var resultadoDescrypt = () => document.getElementById("resultado").innerText = transformMessengerDescrypt(text);

document.getElementById("encrypt").addEventListener("click", resultadoEncrypt);
document.getElementById("descrypt").addEventListener("click", resultadoDescrypt);

