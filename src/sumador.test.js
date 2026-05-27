import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("devuelve 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("devuelve el mismo numero cuando recibe un solo numero", () => {
  expect(sumar("2")).toEqual(2);
  });
});