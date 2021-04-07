console.log('hola mundo')
// los datos primitivos no son mutables
let firstName ='Miguel'
const firstName2 = firstName.toUpperCase();
console.log(firstName2);
// lista mutable(cambia)
const list = []
list.push(1);
console.log(list);
// lista no mutable
const anotherList = list.concat(465)
console.log(anotherList)

// objeto
const persona={
    name:'Miguel',
    twitter:'@midudev',
    age:18,
    isDeveloper:true,
    links:['links1', 'links2']
}
console.log(persona.name);
const field ='twitter'

console.log(persona[field]);
// funcion expression
const suma = (operando1, operando2 )=>{
    console.log(operando1)
    console.log(operando2)
    return operando1+operando2
}
console.log(suma(2,2))
// declaracion
function restar(a, b){
    return a -b
}
