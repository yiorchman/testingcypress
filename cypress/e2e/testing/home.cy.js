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
        cy.get('span').contains('Women').trigger('mouseover')
        cy.get('span').contains('Jackets').click({ force : true})
        cy.get('h1').contains('Jackets')
    })
    it('Men', () => {
        cy.get('span').contains('Men').trigger('mouseover')
        cy.get('span').contains('Jackets').click({ force : true})
        cy.get('h1').contains('Jackets')
    })
    it('Gear', () => {
        cy.get('span').contains('Gear').trigger('mouseover')
        cy.get('span').contains('Bags').click({ force : true})
        cy.get('h1').contains('Bags')
    })
    it('Training', () => {
        cy.get('span').contains('Training').trigger('mouseover')
        cy.get('span').contains('Video Download').click({ force : true})
        cy.get('h1').contains('Video Download')
    })
    it('Sale', () => {
        cy.get('span').contains('Sale').click()
        cy.get('h1').contains('Sale')
    })
})
