import Cpf from "../src/Cpf";

test("Deve validar o cpf 1", function(){
    const cpf = new Cpf('935.411.347-80');
    expect(cpf).toBeTruthy();
})

test("Deve validar um cpf invalido", function(){
    expect(()=> new Cpf('123.456.789-99')).toThrow(new Error('Invalid cpf'));
})


test("Deve tentar validade um cpf com todos os digitos igusis", function(){
    expect(()=> new Cpf('111.111.111-111')).toThrow(new Error('Invalid cpf'));
})

test("Deve tentar validade um cpf invalido muito grande", function(){
    expect(()=> new Cpf('123.456.789-1000')).toThrow(new Error('Invalid cpf'));
})