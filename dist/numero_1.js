"use strict";
// 1- Crie uma classe com os atributos produto, preço, quantidade, os métodos
// getters e setters. Crie validação para não aceitar nome em branco, preco e
// quantidade com valor 0 (zero). Considerando que são oferecidos descontos pelo
// número de quantidade comprada, seguindo a tabela abaixo:
// a) Até 10 unidades: não tem desconto;
// b) de 11 a 20 unidades: 10% de desconto;
// c) de 21 a 50 unidades: 20% de desconto;
// d) acima de 50 unidades: 25% de desconto.
// Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada
// de 999 teve o desconto de 999 e o valor pago foi de 99999.
var Compras = /** @class */ (function () {
    function Compras(_produtos, _preco, _quantidade) {
        this._produtos = _produtos;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Compras.prototype, "produtos", {
        get: function () {
            return this._produtos;
        },
        set: function (produtos) {
            if (produtos.length == 0) {
                throw new Error("Produto Sem Identificação");
            }
            this._produtos = produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Compras.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco == 0) {
                throw new Error("Preço de Produto Inválido");
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Compras.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade == 0) {
                throw new Error("Quantidade do Pruduto Inválida");
            }
        },
        enumerable: false,
        configurable: true
    });
    Compras.prototype.precoTotal = function () {
        return this.preco * this.quantidade;
    };
    Compras.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade > 10 || this.quantidade <= 20) {
            return this.precoTotal() * 0.1;
        }
        else if (this.quantidade > 20 || this.quantidade <= 50) {
            return this.precoTotal() * 0.2;
        }
        else {
            return this.precoTotal() * 0.25;
        }
    };
    Compras.prototype.valorFinal = function () {
        if (this.quantidade <= 10) {
            return this.precoTotal();
        }
        else {
            return this.precoTotal() + this.desconto();
        }
    };
    return Compras;
}());
var compras = new Compras('Nescau', 2, 7);
console.log(compras);
// try{
//     compras.produtos = 'Celular',
//     compras.quantidade = 11,
//     compras.preco = 2500
// }catch(err:any){
//     console.log(err.message)
// }
console.log('O produto ', compras.produtos, ' de preço ', compras.preco, ' e quantidade comprada de ', compras.quantidade, ' teve o desconto de ', compras.desconto(), ' e o valor pago foi de ', compras.valorFinal());
