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


class Compras{
    constructor(
        private _produtos: string,
        private _preco: number,
        private _quantidade: number,
    ) {}

    get produtos(){
        return this._produtos
    }

    get preco(){
        return this._preco
    }

    get quantidade(){
        return this._quantidade
    }

    set produtos(produtos: string){
        if(produtos.length == 0){
            throw new Error("Produto Sem Identificação")
        }

        this._produtos = produtos

    }

    set preco(preco: number){
        if(preco == 0){
            throw new Error("Preço de Produto Inválido")
        }
        this._preco = preco        
    }

    set quantidade(quantidade: number){
        if(quantidade == 0){
            throw new Error("Quantidade do Pruduto Inválida")
        }
    }

    precoTotal(){
        return this.preco * this.quantidade
    }

    desconto(){
        if(this.quantidade <= 10){
            return 0
        }else if(this.quantidade > 10 || this.quantidade <= 20){
            return this.precoTotal() * 0.1
        }else if(this.quantidade > 20 || this.quantidade <= 50){
            return this.precoTotal() * 0.2
        }else{
            return this.precoTotal() * 0.25
        }                
    }

    valorFinal(){
        if(this.quantidade <= 10){
            return this.precoTotal()
        } else{
            return this.precoTotal() + this.desconto()
        }
    }
}

const compras = new Compras('Nescau', 2, 7)
console.log(compras)

// try{
//     compras.produtos = 'Celular',
//     compras.quantidade = 11,
//     compras.preco = 2500
// }catch(err:any){
//     console.log(err.message)
// }

console.log('O produto ', compras.produtos,  ' de preço ', compras.preco, ' e quantidade comprada de ', compras.quantidade,  ' teve o desconto de ', compras.desconto(),
     ' e o valor pago foi de ', compras.valorFinal())