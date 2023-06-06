class Automation {
    static get url(){
        return "/automation-practice-form";
    }
    static get firstName(){
        return cy.get('[id="firstName"]');
    }
    static get lastName() {
        return cy.get('[id="lastName"]');
    }
    static get userEmail(){
        return  cy.get('[id="userEmail"]');
    }
    static get genderMale(){
        return  cy.get('[for="gender-radio-1"]')
    }
    static get userNumber(){
        return  cy.get('[id="userNumber"]')
    }

    static get clickDate(){
        return cy.get('[id="dateOfBirthInput"]')
    }
    static get dateYear() {
        return  cy.get('.react-datepicker__year-dropdown-container');
    }
    static get dateYearSelector(){
        return  cy.get('.react-datepicker__year-select');
    }
    static get dateMonth(){
        return cy.get('.react-datepicker__month-dropdown-container');
    }
    static get dateMonthSelector(){
        return  cy.get('.react-datepicker__month-select');
    }
    static get twoEightthDateSelect(){
        return  cy.get('[aria-label="Choose Tuesday, January 28th, 1930"]');
    }
    static get subject(){
        return cy.get('[id="subjectsContainer"]');
    }
    static get musicCheck(){
        return  cy.get('[for="hobbies-checkbox-3"]');
    }
    static get photoUpload(){
        return cy.get('[id="uploadPicture"]');
    }
    static get state(){
        return  cy.get('[id="state"]');
    }
    static get city(){
        return  cy.get('[id="city"]');
    }
    static get submit(){
        return cy.get('[id="submit"]');
    }
    static get submitFront() {
        return cy.get('[id="example-modal-sizes-title-lg"]');
    }
    static get tableInfo(){
        return cy.get('.table-hover');
    }







}
export default Automation