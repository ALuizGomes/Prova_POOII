"use strict";
// 2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
// conversão das unidades de velocidade segundo a lista abaixo, por exemplo
// converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
// retornar o valor em segundos.
// • 1 minuto = 60 segundos
// • 1 hora = 60 minutos
// • 1 dia = 24 horas
// • 1 semana = 7 dias
// • 1 mês = 30 dias
// • 1 ano = 365.25 dias
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo() {
    }
    ConversaoDeUnidadesDeTempo.conversaoMpS = function (minutos) {
        if (minutos == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var mps = minutos * 60;
        return mps;
    };
    ConversaoDeUnidadesDeTempo.conversaoHpM = function (hora) {
        if (hora == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var hpm = hora * 60;
        return hpm;
    };
    ConversaoDeUnidadesDeTempo.conversaoDpH = function (dia) {
        if (dia == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var dph = dia * 24;
        return dph;
    };
    ConversaoDeUnidadesDeTempo.conversaoSepD = function (semana) {
        if (semana == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var sepd = semana * 7;
        return sepd;
    };
    ConversaoDeUnidadesDeTempo.conversaoMpD = function (mes) {
        if (mes == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var mpd = mes * 30;
        return mpd;
    };
    ConversaoDeUnidadesDeTempo.conversaoApD = function (ano) {
        if (ano == 0) {
            throw new Error("Impossível realizar a conversão!");
        }
        var apd = ano * 365.25;
        return apd;
    };
    return ConversaoDeUnidadesDeTempo;
}());
var conversao = ConversaoDeUnidadesDeTempo.conversaoApD(10);
console.log(conversao);
