const { potencia, maior, menor, raiz } = require("../index.js");

test("potencia", () => {
  expect(potencia(2, 3)).toBe(8);
});

test("maior", () => {
  expect(maior(10, 5)).toBe(10);
});

test("menor", () => {
  expect(menor(10, 5)).toBe(5);
});

test("raiz", () => {
  expect(raiz(9)).toBe(3);
});
