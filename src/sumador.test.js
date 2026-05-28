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

  it("acepta un delimitador personalizado", () => {
  expect(sumar("//[;] 6;7;4")).toEqual(17);
  });

  it("combina delimitador personalizado con coma y guion", () => {
  expect(sumar("//[;] 6,3-2;1")).toEqual(12);
  });

  it("ignora numeros mayores a 1000", () => {
  expect(sumar("2,1001")).toEqual(2);
  });
});