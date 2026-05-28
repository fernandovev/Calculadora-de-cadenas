function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  let textoNumeros = cadena;
  let separador = /[,-]/;

  if (cadena.startsWith("//")) {
    const coincidencia = cadena.match(/^\/\/\[(.)\]\s*(.*)$/);
    const delimitador = coincidencia[1];

    textoNumeros = coincidencia[2];
    separador = new RegExp(escaparRegex(delimitador));
  }

  return textoNumeros
    .split(separador)
    .map((numero) => Number(numero))
    .reduce((suma, numero) => suma + numero, 0);
}

function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default sumar;