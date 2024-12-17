import telaInicalpageObjs  from "../support/PageObjects/telaInicalpageObjs"

describe('Concluir o primeiro item na minha lista do toDo', () => {

    /*
    - dado berfore o antes do primeiro teste
    ´- before each - antes de cada teste
    */

    beforeEach(()=>{
        cy.visit('/')

        var todoItens=["byd","volvo","geely","ford"]

        todoItens.forEach(function(item,indice, array){
            telaInicalpageObjs.inputText(item)
        }) 

        telaInicalpageObjs.concluirItem()

    })


    it('concluir um item na lista', () => {

        telaInicalpageObjs.concluirItem()
       
      })
})