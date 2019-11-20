// <reference types="Cypress" />
/// <reference types="cypress-downloadfile"/>

var text 
const day = 1

context('Actions', () => {

  it('Download Sample', () => {
    cy.visit('https://pycrawler.cupoy.com')
    cy.contains('登入').click()
    cy.get('input[type=email]').type(Cypress.env('ACCOUNT'))
    cy.get('input[type=password]').type(Cypress.env('PWD'))
    cy.get('.rc-dialog-body').contains(/^登入$/).click()
    cy.wait(2000)

    let page = "000" + day
    page = page.substring(page.length-3, page.length)
    //下載ipynb file
    cy.visit('https://pycrawler.cupoy.com/mission/D'+day)
    cy.get('h2').should(($h2)=>{
      text = $h2.text()
      // text = text.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/,"_");
      text = text.replace(/[\uff1a_]/g,"_");
      cy.downloadFile('https://pycrawler.cupoy.com/HomeworkAction.do?op=getHomeworkFileContent&hwid=D'+day+'&filepath=Day'+page+'_Sample.ipynb','../HomeWork/'+text,'Day'+page+'_Sample.ipynb');  
    })
  })

  it('Download Homework', () => {
    cy.visit('https://pycrawler.cupoy.com')
    cy.contains('登入').click()
    cy.get('input[type=email]').type(Cypress.env('ACCOUNT'))
    cy.get('input[type=password]').type(Cypress.env('PWD'))
    cy.get('.rc-dialog-body').contains(/^登入$/).click()
    cy.wait(2000)

    let page = "000" + day
    page = page.substring(page.length-3, page.length)
    //下載ipynb file
    cy.visit('https://pycrawler.cupoy.com/mission/D'+day)
    cy.get('h2').should(($h2)=>{
      text = $h2.text()
      // text = text.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/,"_");
      text = text.replace(/[\uff1a_]/g,"_");
      cy.downloadFile('https://pycrawler.cupoy.com/HomeworkAction.do?op=getHomeworkFileContent&hwid=D'+day+'&filepath=Day'+page+'_HW.ipynb'    ,'../HomeWork/'+text,'Day'+page+'_HW.ipynb');
    })
  })

  it('Download PDF', () => {
    cy.visit('https://pycrawler.cupoy.com')
    cy.contains('登入').click()
    cy.get('input[type=email]').type(Cypress.env('ACCOUNT'))
    cy.get('input[type=password]').type(Cypress.env('PWD'))
    cy.get('.rc-dialog-body').contains(/^登入$/).click()
    cy.wait(2000)

    var page = 2
    cy.visit('https://pycrawler.cupoy.com/mission/D'+page)
    cy.wait(10000)
    var text
    cy.get('h2').should(($h2)=>{
      text = $h2.text()
      text = text.replace(/[\uff1a_]/g,"_");
    })
    cy.contains('下載')
      .invoke('attr', 'href')
      .then( async(href) => {
        cy.clearCookies()
        await cy.downloadFile('https://pycrawler-fileentity.cupoy.com/1st/dailytask/D'+page+'/__PDF__?t=1573820109090' ,'../HomeWork/'+text,text+'.pdf');;
      })
      .should('have.length',3)

    // let page = "000" + day
    // page = page.substring(page.length-3, page.length)
    // //下載ipynb file
    // cy.visit('https://pycrawler.cupoy.com/mission/D'+day)
    
    // cy.get('h2').should(($h2)=>{
    //   text = $h2.text()
    //   // text = text.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/,"_");
    //   text = text.replace(/[\uff1a_]/g,"_");
    //   cy.downloadFile('https://pycrawler-fileentity.cupoy.com/1st/dailytask/D'+page+'/__PDF__?t=1573820109090' ,'../HomeWork/'+text,text+'.pdf');
    // })
  })
})
