//cypress test to check the numbers of WNBA teams and print their names
describe('My assigment', () =>{
  it('Test WNBA website', () => {

    //load the WBNA web page
    cy.visit('https://www.wnba.com/standings/')

    //select season 2018 
   cy.get('select[id="Season-dropdown"]').select('2018',{force:true})

    //assert that number of table records is 12
   cy.get('tbody tr').should('have.length', 12)

   //iterate over the table 
   cy.get('tbody > tr  > td:nth-child(1)').each(($elm)=> {

    //declare variable and get text from it, filter out numbers
    const t = $elm.text().replace(/\d+/g, '');

    //print team names using cypress log API
    cy.log(t)  
   })
  })
})