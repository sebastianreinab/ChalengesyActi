const familiaRB = ['Julio','María','Juan','Aru','Sebastián'];
const familiaCB = ['Jaime','Jasmín','Nathalia','Jessica'];
const numeros = [8,6,4,7,6,3,0]

//función lenght
for(let i = 0; i < familiaRB.length; i++) {
    console.log("El nombre del familiar es ---> "+familiaRB[i])
}
//función concat
console.log(familiaRB.concat(familiaCB))
//Función pop
console.group(familiaRB.pop())
console.log(familiaCB.pop())
//Función push
familiaRB.push("Nora")
console.log(familiaRB)
//Función sort
console.log(familiaRB.sort())
//Función shift
console.log(familiaRB.shift())
//Función fill
console.log(familiaCB.fill("familia"))
//Función 
familiaCB = ['Jaime','Jasmín','Nathalia','Jessica'];
familiaCB.slice(1,2)
console.log(familia)
//Función 
