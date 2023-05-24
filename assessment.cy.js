// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('My assigment', () =>{
  it('Test WBMA website', () => {
    cy.visit('https://www.wnba.com/standings/')

   cy.get('select[id="Season-dropdown"]').select('2018',{force:true})

   cy.get('tbody tr').should('have.length', 12)
   cy.get('tbody > tr  > td:nth-child(1)').each(($elm)=> {
    const t = $elm.text();
    cy.log(t)  
   })
  })
})