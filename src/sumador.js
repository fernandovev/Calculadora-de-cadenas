function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  let textoNumeros = cadena;
  const delimitadores = [",", "-"];

  if (cadena.startsWith("//")) {
    const coincidencia = cadena.match(/^\/\/\[([^\]]+)\]\s*(.*)$/);
    const delimitadorPersonalizado = coincidencia[1];

    textoNumeros = coincidencia[2];
    delimitadores.push(delimitadorPersonalizado);
  }

  const separador = new RegExp(
    delimitadores.map((delimitador) => escaparRegex(delimitador)).join("|")
  );

  return textoNumeros
    .split(separador)
    .map((numero) => Number(numero.trim()))
    .filter((numero) => numero <= 1000)
    .reduce((suma, numero) => suma + numero, 0);
}

function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default sumar;