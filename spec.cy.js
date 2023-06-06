import Automation from "../pageObjects/Automation.page";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
  });

describe("DemoQA spec", () => {
  context("AutomationPractice", () => {
    beforeEach(() => {
      cy.visit("/automation-practice-form");
    });

    it("Final Task", () => {

     Automation.firstName.type("MyName");
     Automation.lastName.type("MyPassword");
      Automation.userEmail.type("myEmail@va.lv");
     Automation.genderMale.click();
      Automation.userNumber.type("3215252351");


      Automation.clickDate.click();
      Automation.dateYear;
      Automation.dateYearSelector.select("1930");
      Automation.dateMonth;
      Automation.dateMonthSelector.select("1");
     Automation.twoEightthDateSelect.click();

      Automation.subject.type("Economics{enter}");
     Automation.musicCheck.click();
      Automation.photoUpload.click().selectFile('cypress/Photo.png');
      
     Automation.state.type("NCR{enter}");
     Automation.city.type("Delhi{enter}")

      Automation.submit.click({force:true});
  
      Automation.submitFront.should("have.text","Thanks for submitting the form")
      Automation.tableInfo.contains("MyName MyPassword");
      Automation.tableInfo.contains("myEmail@va.lv");
      Automation.tableInfo.contains("Male");
      Automation.tableInfo.contains("28 January,1930");
      Automation.tableInfo.contains("Economics");
      Automation.tableInfo.contains("Photo.png");
      Automation.tableInfo.contains("NCR Delhi");





   //   cy.get('.css-yk16xz-control').click();
  //   cy.get('.css-yk16xz-control').select("NYC");   
 //     cy.get('[id="state"]').click({force:true});
   //   cy.get('.css-1pahdxg-control').select("NYC");
 //     cy.get('.css-1wa3eu0-placeholder').click();



    });






})})
