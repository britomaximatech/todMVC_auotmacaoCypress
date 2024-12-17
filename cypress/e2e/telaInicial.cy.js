/*
--> feature - descrição do cenario  "describe"
--> background - contexto  "beforeEach"
--> caso de teste - it

*/

import telaInicalpageObjs from '../support/PageObjects/telaInicalpageObjs'

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/polymer/index.html')
    telaInicalpageObjs.inputText()
  })
})