import telaInicalpageObjs  from "../support/PageObjects/telaInicalpageObjs"

describe('Adicionar itens na minha lista do toDo', () => {

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
        
    
    })

    it('adicionar um item na lista', () => {
        telaInicalpageObjs.inputText("anamaueaueaae")
        telaInicalpageObjs.inputText("arranha cel")
      })

    it('adicionar mais um item na lista', () => {

        var todoItens=["byd","volvo","geely","ford"]

        todoItens.forEach(function(item,indice, array){
            telaInicalpageObjs.inputText(item)
        })
       
      })
 

})