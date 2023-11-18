let esMayordeEdad = prompt("Eres una persona mayor de edad? Ingresa tu");

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
let altura = parseFloat (prompt ("Ingresa tu altura en metros"));

function calcularIMC () {
    let continuar = true;

    while (continuar){
        let peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));
        let altura = parseFloat (prompt ("Ingresa tu altura en metros"));
        let IMC = peso / (altura * altura);
        if (IMC < 18.5) {
            console.log(" Tu IMC es " + IMC + " Bajo peso");
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            console.log(" Tu IMC es " + IMC + " Peso saludable");
        } else if (IMC >= 25 && IMC <= 29.9) {
            console.log(" Tu IMC es " + IMC + " Sobrepeso");
        } else {
            console.log(" Tu IMC es " + IMC + " Considera Obesidad");
    }
    let respuesta = prompt("¿Deseas calcular el IMC nuevamente? (SI/NO)").toUpperCase();
        if (respuesta !== "SI") {
            continuar = false;
        }
    }
}

calcularIMC();
