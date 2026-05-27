import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("devuelve 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("devuelve el mismo numero cuando recibe un solo numero", () => {
  expect(sumar("2")).toEqual(2);
  });

  it("suma dos numeros separados por coma", () => {
  expect(sumar("1,2")).toEqual(3);
  });

  it("suma varios numeros separados por coma", () => {
  expect(sumar("1,2,3")).toEqual(6);
  });

  it("acepta guion como separador", () => {
  expect(sumar("1-2,3")).toEqual(6);
  });
});