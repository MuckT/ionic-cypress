/// <reference types="cypress" />

const sizes = ['iphone-5', 'macbook-15'];
sizes.forEach(size => {
  describe(`${size} Tests`, () => {
    beforeEach(() => {
      cy.viewport(size);
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
      if (size === 'iphone-5') {
        cy.get('[data-cy="menu"]').click();
      }
      cy.get("[data-cy=dark-mode]").click();
      cy.contains("Dark Mode").should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("Searches For A Session & Adds To Favorites", () => {
      cy.get("[data-cy=search]").click();
      cy.get("[data-cy=searchbar]").click().type("Angular{enter}");
      cy.contains("Angular Directives").click();
      cy.get("[data-cy=favorite]").click();
      cy.get("[data-cy=back]").click();
      cy.contains("Favorites").click();
      cy.contains("Angular Directives");
    });
  });
});
