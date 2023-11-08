let esMayordeEdad = prompt("Eres una persona mayor de edad?");

if (esMayordeEdad >=18){
    console.log ("Puedes continuar");
}else{
    console.log ("No puedes continuar");
}

const SEXO = prompt("Ingresa tu sexo (Femenino/Masculino)");

if(SEXO === "femenino"){
    console.log ("Eres una persona de sexo femenino");
}else if(SEXO === "masculino"){
    console.log("Eres una persona de sexo masculino");
}else{
    console.log("El sexo ingresado no es valido.");
}

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));

if ( parseInt(peso)) {
console.log("El peso ingresado es: " + peso);
} else {
console.log("La entrada no es un número válido");
}

let altura = parseFloat (prompt ("Ingresa tu altura en metros"));

if (parseInt(altura)) {
console.log("La altura ingresada es: " + altura);
} else {
console.log("La entrada no es un número válido");
}

// Calcular el IMC
// IMC = peso / (altura * altura)

const IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log(IMC + " " + "Bajo peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(IMC + " " + "Peso saludable");
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(IMC + " " + "Sobrepeso");
} else {
    console.log(IMC + " " + "Considera Obesidad");
}