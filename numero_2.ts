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

class ConversaoDeUnidadesDeTempo{
    static conversaoMpS(minutos: number){
        if(minutos == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const mps = minutos * 60
        return mps
    }

    static conversaoHpM(hora:number){
        if(hora == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const hpm = hora * 60
        return hpm
    }

    static conversaoDpH(dia: number){
        if(dia == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const dph = dia * 24
        return dph
    }

    static conversaoSepD(semana: number){
        if(semana == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const sepd = semana * 7
        return sepd
    }

    static conversaoMpD(mes: number){
        if(mes == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const mpd = mes * 30
        return mpd
    }

    static conversaoApD(ano: number){
        if(ano == 0){
            throw new Error("Impossível realizar a conversão!")
        }
        const apd = ano * 365.25
        return apd
    }
}

const conversao = ConversaoDeUnidadesDeTempo.conversaoApD(10)
console.log(conversao)