import telaInicalpageObjs  from "../support/PageObjects/telaInicalpageObjs"

describe('deletar itens minha lista do toDo', () => {

 
 beforeEach(()=>{
        cy.visit('/')

        var todoItens=["byd","volvo","geely","ford"]

        todoItens.forEach(function(item,indice, array){
            telaInicalpageObjs.inputText(item)
        }) 
        
        telaInicalpageObjs.concluirItem()
    })


    it('deleçao de um iten da lista ',() =>{

        telaInicalpageObjs.deletarItem()

    });


});
