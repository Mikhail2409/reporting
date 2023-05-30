describe('Tests automatisés', () => {
  it('successful registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="firstName"]').type('Mikhai', { force: true })
    cy.get('input[id="lastName"]').type('Lil', {force:true})
    cy.get('input[id="signup-email"]').type('mikhail1234l@gmail.fr', {force:true})
    cy.get('input[id="signup-password"]').type('Ll123456l', {force:true})
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click({force:true})
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').click()
  })
  it('failed registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')    
    cy.get('input[id="firstName"]').type('Mikhai', { force: true })
    cy.get('input[id="lastName"]').type('Lil', {force:true})
    cy.get('input[id="signup-email"]').type('mikhail1234l@gmail.fr', {force:true})
    cy.get('input[id="signup-password"]').type('Ll123456l', {force:true})
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click({force:true})
    cy.contains('p', 'Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre').should('be.visible')
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').click()
  })
  it('authentication', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="signup-email"]').type('mikhail1234l@gmail.fr', {force:true})
    cy.get('input[id="signup-password"]').type('Ll123456l', {force:true})
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click({force:true})
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').click()
  })
  
})
