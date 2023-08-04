/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ('Validar maior de idade',function () {
    var resultado = validarIdade("18");
    expect(resultado).toBe(true);
})

test ('Validar menor de idade',function () {
    var resultado = validarIdade("17");
    expect(resultado).toBe(false);
})