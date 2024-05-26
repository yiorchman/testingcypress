beforeEach(() => {

    cy.visit('https://magento.softwaretestingboard.com/')
  
  })
  

describe('Home Test', () =>{

    it('navigate to home page',() => {
        cy.get('#search').type('jacket{enter}')   
        cy.get('span').contains('Search results for')
    })
    it('Shop For Joga', () => {
        cy.get('span').contains('Shop New Yoga').click()
        cy.get('span').contains("New Luma Yoga Collection")
    })
})

describe('Menu options', () => {
    it('whats new', () => {
       cy.get('span').contains('What\'s New').click() 
       cy.get('span[data-ui-id="page-title-wrapper"]').contains('What\'s New')
       cy.get('h2').contains('Luma\'s Latest')
       cy.get('p').contains('Just in time for the new season!')
    })

    it('Women', () => {
        
    })
    it('Men', () => {
        
    })
    it('Gear', () => {
        
    })
    it('Training', () => {
        
    })
    it('Sale', () => {
        
    })
})
