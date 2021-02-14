/// <reference types="cypress" />

describe("Swipe Tests", () => {
  const slider = '.swiper-slide-active';
  it("Swipes Through Tutorial", () => {
    //pauses added for demonstration purposes, can be removed
    cy.enableTutorial();
    cy.get(slider).realSwipe("toLeft")
    cy.get(slider).realSwipe("toLeft")
    cy.get(slider).realSwipe("toLeft")
    cy.contains("Continue").click();
  });
});
