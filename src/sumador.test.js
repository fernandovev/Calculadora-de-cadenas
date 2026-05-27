import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("devuelve 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });
});