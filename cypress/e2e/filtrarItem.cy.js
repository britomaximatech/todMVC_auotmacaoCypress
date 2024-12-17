import telaInicalpageObjs  from "../support/PageObjects/telaInicalpageObjs"

describe('filtrar itens minha lista do toDo', () => {

 
 beforeEach(()=>{
        cy.visit('/')

        var todoItens=["byd","volvo","geely","ford"]

        todoItens.forEach(function(item,indice, array){
            telaInicalpageObjs.inputText(item)
        }) 
        
        telaInicalpageObjs.concluirItem()
    })

    /*
    - clicar no filtro
    - o item ser exibido
    - e o contador deve bate
    */

    it('Filtrar itens ativos',() =>{

        telaInicalpageObjs.filtrarItem("Active")

    });

    it('Filtrar itens concluidos',() =>{

    })

})
