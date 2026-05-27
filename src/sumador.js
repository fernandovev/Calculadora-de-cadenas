function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  return cadena
    .split(",")
    .map((numero) => Number(numero))
    .reduce((suma, numero) => suma + numero, 0);
}

export default sumar;