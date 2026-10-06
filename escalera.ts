let numero: number = 4512893;

let anterior: number = 0;
let longitud: number = 0;
let potencia: number = 1;
let escalera: number = 0;
let mayorLongitud: number = 0;
let mayorEscalera: number = 0;

while (numero > 0) {
  let digito: number = numero % 10;
  numero = (numero - digito) / 10;

  if (anterior === digito + 1) {
    longitud = longitud + 1;
    potencia = potencia * 10;
    escalera = escalera + digito * potencia;
  } else {
    longitud = 1;
    potencia = 1;
    escalera = digito;
  }

  anterior = digito;

  if (longitud >= mayorLongitud) {
    mayorLongitud = longitud;
    mayorEscalera = escalera;
  }
}

console.log("Longitud: " + mayorLongitud);
console.log("Escalera: " + mayorEscalera);