/// <reference types="cypress" />

describe("Tutorial Path", () => {
  const slider = '.swiper-slide-active';
  beforeEach(() => {
    cy.enableTutorial();
  });

  it("Swipes Through Tutorial", () => {
    cy.get(slider).realSwipe("toLeft")
    cy.get(slider).realSwipe("toLeft")
    cy.get(slider).realSwipe("toLeft")
    cy.contains("Continue").click();
  });

  it('Should Be Able To Skip', () => {
    cy.get('[data-cy="skip-tutorial"]').click({ force:true });
    cy.url().should('contain', 'app/tabs/schedule')
    cy.get('ion-title').should('contain.text', 'Schedule').and('be.visible');
  });

  it("Check Page With Lighthouse", { // Individual steps have duplicate scores; Don't retest the same thing.
    retries: {
      runMode: 0,
      openMode: 0
    }
  }, () => {
    cy.lighthouse();
  });

  it("Check Page With Pa11y", {
    retries: {
      runMode: 0,
      openMode: 0
    }
  }, () => {
    cy.pa11y({
      viewport: {
        width: 320,
        height: 568,
        deviceScaleFactor: 2,
        isMobile: true
      }
    });
  });

  describe('\'Welcome To\' Page', () => {
    beforeEach(() => {
      cy.enableTutorial();
    });
    it('Check Page Content', () => {
      cy.get('.slide-image').should('be.visible').and('have.attr', 'src', 'assets/img/ica-slidebox-img-1.png')
      cy.get('h2').should('contain.text', 'Welcome to');
      cy.get('p').should('contain.text', 'is a practical preview of the ionic framework in action, and a demonstration of proper code use.')
    });

    it('Some Additional Tests #TODO');
  });

  describe('\'What is Ionic?\' Page', () => {
    beforeEach(() => {
      cy.enableTutorial();
      cy.get(slider).realSwipe("toLeft");
    });

    it('Check Page Content', () => {
      cy.get('img.slide-image').eq(1).should('be.visible').and('have.attr', 'src', 'assets/img/ica-slidebox-img-2.png')
      cy.get('h2').should('contain.text', 'What is Ionic?');
      cy.get('p').should('contain.text', 'is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.')
    });
  });

  describe('\'What is Ionic Appflow?\ Page', () => {
    beforeEach(() => {
      cy.enableTutorial();
      cy.get(slider).realSwipe("toLeft");
      cy.get(slider).realSwipe("toLeft");
    });

    it('Check Page Content', () => {
      cy.get('img.slide-image').eq(2).should('be.visible').and('have.attr', 'src', 'assets/img/ica-slidebox-img-3.png')
      cy.get('h2').should('contain.text', 'What is Ionic Appflow?');
      cy.get('p').should('contain.text', 'is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.')
    });
  });
});

describe("Landing Page Tests", () => {
  beforeEach(() => {
    cy.disableTutorial();
  });

  it("Adds A Session From List To Favorites", () => {
    cy.contains("University of Ionic").click({ force: true });
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back").click();
    cy.contains("Favorites").click();
    cy.contains("University of Ionic");
  });

  it("Enables Dark Mode", () => {
    cy.get("[data-cy=menu]").click();
    cy.get("[data-cy=dark-mode]").click();
    cy.contains("Dark Mode").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Searches For A Session And Adds To Favorites", () => {
    cy.get("[data-cy=search]").click();
    cy.get("[data-cy=searchbar]").click().type("Angular{enter}");
    cy.contains("Angular Directives").click();
    cy.get("[data-cy=favorite]").click();
    cy.get("[data-cy=back]").click();
    cy.contains("Favorites").click();
    cy.contains("Angular Directives");
  });
});
