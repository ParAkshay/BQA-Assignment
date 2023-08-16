export class testdata {
    email = 'akshaybqa7@gmail.com'
    password = 'Akshay@Bqa7143'
    incorrectpass='Akshay'

    HomepageLogin() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('/');

        // Fill in the email input and click Next
        cy.get('input[type="email"]').type(this.email);
        cy.get('#identifierNext').click();
        cy.wait(5000)

        // Fill in the password input and click Next
        cy.get('input[type="password"]').type(this.password);
         cy.get('#passwordNext').click();

    }
    InvalidLogin(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('/');

        // Fill in the email input and click Next
        cy.get('input[type="email"]').type(this.email);
        cy.get('#identifierNext').click();
        cy.wait(5000)

        // Fill in the password input and click Next
        cy.get('input[type="password"]').type(this.incorrectpass);
        cy.get('#passwordNext').click();
        cy.get('[jsname="B34EJ"] > span').should('be.visible')
    }
    Pagevalidation(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('/');
        cy.get('.gEc4r').should('be.visible')
        cy.get('.a2CQh').should('be.visible')
        cy.get('.D4rY0b > .vOZun').should('contain','Not your computer')
        cy.get('.HUYFt').should('be.visible')
    }


}
