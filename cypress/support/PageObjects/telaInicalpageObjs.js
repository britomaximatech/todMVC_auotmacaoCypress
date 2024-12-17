import { itens } from '../elements/telaInicialelements';

const elem =require('../elements/telaInicialelements').elements
const concluirItens =require('../elements/telaInicialelements').itens
const filtros =require('../elements/telaInicialelements').filtros

class telaInicial{

    inputText(dado){

        cy.get(elem.inputTodo).type(dado).type('{enter}')

    }

    concluirItem(){
        cy.get(itens.buttonCocluirItem)
        .first()
        .click()
    }

    filtrarItem (menu){
        cy.get(filtros.filtroTodo)
        .contains(menu)
        .and('be.visible')
    }

    deletarItem (){
        cy.get(itens.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .eq(1)
        .click()
    }
}


export default new telaInicial();