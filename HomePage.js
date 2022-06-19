class HomePage{
   
    getnameEditBox(){ return cy.get('form div input[name="name"]')}
    getGenderDropdown(){return cy.get('#exampleFormControlSelect1')}
    TwowaydatabindingBox(){ return cy.get('form-comp div h4 input')}
    EntrepreneurRadioButton(){return cy.get('#inlineRadio3')}
    ShopTab() {return cy.get('li:nth-child(2) > a.nav-link')}

}

export default HomePage;