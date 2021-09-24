"use strict";
// 3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
// trabalhados, total de faltas no ano. Crie os getters e setters.
// Crie um método para calcular o salário bruto que será a multiplicação do salario
// hora pelos dias trabalhados.
// Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
// será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
// salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
// Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
// faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
// ou igual a 5 a PLR será zero.
// Crie um método para calcular o desconto que será 5% do salário bruto.
// Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
// Imprima as seguintes mensagens:
// O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
// de 999
// O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
// 999 e o salário líquido de 9999
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salario, _diasTrabalhados, _totalFaltas) {
        this._nome = _nome;
        this._salario = _salario;
        this._diasTrabalhados = _diasTrabalhados;
        this._totalFaltas = _totalFaltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome.length == 0) {
                throw new Error("Nome Inválido!");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (salario == 0) {
                throw new Error("Salário Inválido");
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diasTrabalhados", {
        get: function () {
            return this._diasTrabalhados;
        },
        set: function (diasTrabalhados) {
            if (diasTrabalhados == 0) {
                throw new Error("Dias de trabalho não podem ser igual a zero");
            }
            this._diasTrabalhados = diasTrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "totalFaltas", {
        get: function () {
            return this._totalFaltas;
        },
        set: function (totalFaltas) {
            this._totalFaltas = totalFaltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.PLR = function () {
        if (this.totalFaltas == 0) {
            return this.salario;
        }
        else if (this.totalFaltas == 1) {
            return this.salario * 0.94;
        }
        else if (this.totalFaltas == 2) {
            return this.salario * 0.92;
        }
        else if (this.totalFaltas == 3) {
            return this.salario * 0.90;
        }
        else if (this.totalFaltas == 4) {
            return this.salario * 0.88;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.desconto = function () {
        return this.salario * 0.05;
    };
    Funcionarios.prototype.salarioLiquido = function () {
        return this.salario - this.desconto() + this.PLR();
    };
    return Funcionarios;
}());
var funcionario = new Funcionarios('Ermanotel', 15000, 30, 0);
console.log(funcionario);
// try{
//     funcionario.nome = ''
//     funcionario.salario = 0
//     funcionario.diasTrabalhados = 0
//     funcionario.totalFaltas = 0
// }catch(err:any){
//     console.log(err.message)
// }
// console.log('Desconto aplicado no salário:', funcionario.desconto())
// console.log('Salário Liquido:', funcionario.salarioLiquido())
console.log('O funcionário de nome', funcionario.nome, 'tem o salário bruto de', funcionario.salario, 'reais, teve', funcionario.totalFaltas, 'falta(s), e sua PLR foi de', funcionario.PLR(), 'reais');
console.log('O funcionário de nome', funcionario.nome, 'tem o salário bruto de', funcionario.salario, 'reais, com desconto de', funcionario.desconto(), 'reais, a PLR de', funcionario.PLR(), 'reias, e o salário líquido de', funcionario.salarioLiquido(), 'reais');
