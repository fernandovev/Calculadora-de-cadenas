function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  const numeros = cadena.split(",");

  if (numeros.length === 1) {
    return Number(numeros[0]);
  }

  return Number(numeros[0]) + Number(numeros[1]);
}

export default sumar;