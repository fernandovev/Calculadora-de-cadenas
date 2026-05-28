function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }

  const { textoNumeros, delimitadores } = obtenerConfiguracion(cadena);

  const separador = new RegExp(
    delimitadores
      .map((delimitador) => escaparRegex(delimitador))
      .join("|")
  );

  return textoNumeros
    .split(separador)
    .map((numero) => Number(numero.trim()))
    .filter((numero) => !Number.isNaN(numero))
    .filter((numero) => numero <= 1000)
    .reduce((suma, numero) => suma + numero, 0);
}

function obtenerConfiguracion(cadena) {
  const delimitadoresBase = [",", "-"];

  if (!cadena.startsWith("//")) {
    return {
      textoNumeros: cadena,
      delimitadores: delimitadoresBase,
    };
  }

  const coincidencia = cadena.match(/^\/\/((?:\[[^\]]+\])+)\s*(.*)$/);

  const seccionDelimitadores = coincidencia[1];
  const textoNumeros = coincidencia[2];

  const delimitadoresPersonalizados = [
    ...seccionDelimitadores.matchAll(/\[([^\]]+)\]/g),
  ].map((coincidencia) => coincidencia[1]);

  return {
    textoNumeros,
    delimitadores: [...delimitadoresBase, ...delimitadoresPersonalizados],
  };
}

function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default sumar;