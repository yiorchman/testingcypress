beforeEach(() => {

    cy.visit('https://magento.softwaretestingboard.com/')
  
  })
  

describe('Fist Test', () =>{

    it('navigate to home page',() => {
        cy.get('#search').type('jacket{enter}')   
        cy.get('span').contains('Search results for')
    })
    it('Shop For Joga', () => {
        cy.get('span').contains('Shop New Yoga').click()
        cy.get('span').contains("New Luma Yoga Collection")
    })
})