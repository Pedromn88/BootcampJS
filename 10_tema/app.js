// 1

const hasId = {
    id: 20,
    name: "pedro",
    surname: "martin",
    age: 33,
};
const { id } = hasId;

console.log(id);

//2

const alumnos = ["pedro", "maria", "patricia", "jose"]

const head = (name1, name2, name3, name4) =>
console.log(name1)

head(...alumnos)


//3
const tail = [, segundo, tercero, cuarto] = alumnos;
console.log(segundo, tercero, cuarto)

//4


const swapFirstToLast = [segundo, tercero, cuarto, primero] = alumnos;
console.log (segundo)
console.log (tercero)
console.log (cuarto)
console.log (primero)


//5

const user = {
    id: 123456,
    name: "Pedro",
    surname: "Martin",
    age: 33,
    };
    
const excludeId = ({ name, surname, age }) => name + " " + surname + " " + age;

console.log(excludeId(user))

//6
 
const personas = ["luisa", "cristina", "Antonio", "Alicia"];
    

const wordsStartingWithA = personas.filter((inicio) => inicio.startsWith("A"));


console.log(wordsStartingWithA)

//7

let longString = "hola que tal buenos días ¿Cómo estás?"
let shortString = "bien"
const concat = longString + "|" + shortString;
console.log(concat)

//8

const arr = [10, 12, 8, 6]
var x = 4
const multArray =({arr})


console.log(multArray)


//9
const suma = [1,2,3,4];

const calcMult = suma.reduce(function(total, num){
total = total * num;
return total;
});

console.log(calcMult);