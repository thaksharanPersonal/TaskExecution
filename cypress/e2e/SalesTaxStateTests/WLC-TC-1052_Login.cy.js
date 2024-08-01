import HomePage from "../../PageObjects/HomePage.js";
import SalesTaxStatesPage from "../../PageObjects/SalesTaxStatesPage.js";
import selectors from '../../support/selectors.js';

describe('Sales Tax Tests', () => {
    const homepage = new HomePage();
    const salestaxpage = new SalesTaxStatesPage();

    beforeEach(() => {
        cy.visit('/')
        cy.login();
        cy.setAccountShippingAddress()
        cy.verifySiteLoaded()
    })

    it('WLC-TC-1052[Login] Sales Tax State Form', () => {

        cy.step('click on "New Account Application" in the footer')
        homepage.verifyFooterStaticPages();
        homepage.clickNewAccountApplication();

        cy.step('click on Sales Tax State Forms button inside the pop-up')
        homepage.clickSalesTaxStateForms();
        salestaxpage.verifyHoverOverState();

        // const stateSelector = '.rsm-geography';

        // // Get all states and iterate through them
        // cy.get(stateSelector).each(($state, index) => {
        //     // Hover over the state to check the hover effect using realHover from cypress-real-events
        //     cy.wrap($state).realHover();

        //     const expectedColor = 'rgb(201, 229, 246)';
        //     const tolerance = 40;

        //     cy.wrap($state).should(($elem) => {
        //         const actualColor = Cypress.$($elem).css('fill');
        //         const [r1, g1, b1] = expectedColor.match(/\d+/g);
        //         const [r2, g2, b2] = actualColor.match(/\d+/g);

        //         expect(Number(r2)).to.be.closeTo(Number(r1), tolerance);
        //         expect(Number(g2)).to.be.closeTo(Number(g1), tolerance);
        //         expect(Number(b2)).to.be.closeTo(Number(b1), tolerance);
        //     });

        //     // Log a message for debugging
        //     cy.log(`Hovered over state ${index + 1}`);
        // });

        cy.step('Click on a specific state');
        salestaxpage.clickOnAnyState('Arizona');

        cy.step('Verify state click result');
        salestaxpage.verifyArizonaPopupContent();
        cy.clickonCloseBtninPopUp();

    });
})
