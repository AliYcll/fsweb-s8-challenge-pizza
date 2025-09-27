describe('Pizza Order Form', () => {
  const testData = {
    name: 'Ali Yücel',
    size: 'M',
    dough: 'İnce',
    toppings: ['Pepperoni', 'Biber', 'Mısır', 'Kanada Jambonu'],
    notes: 'Lütfen bol acılı olsun!'
  };

  const fillPizzaForm = (data, toppingLimit = data.toppings.length) => {
    cy.get('.name-input').type(data.name);
    cy.get(`.radio-group input[value="${data.size}"]`).parent('label').click();
    cy.get('.dough-select').select(data.dough);

    data.toppings.slice(0, toppingLimit).forEach(topping => {
      cy.contains('.toppings-grid label', topping).find('input').check();
    });

    cy.get('.notes-input').type(data.notes);
  };

  beforeEach(() => {
    cy.visit('http://localhost:5173/order');
  });

  it('should not enable submit if less than 4 toppings are selected', () => {
    fillPizzaForm(testData, 2); // sadece 2 topping seçelim
    cy.get('.btn-submit').should('be.disabled');
  });

  it('should fill the form correctly and submit', () => {
    fillPizzaForm(testData); // tüm toppings (4 tane)

    cy.get('.btn-submit').should('not.be.disabled').click();

    cy.url().should('include', '/success');
    cy.get('.success-title').should('contain', 'SİPARİŞ ALINDI');

    cy.contains(`Boyut: ${testData.size}`).should('exist');
    cy.contains(`Hamur: ${testData.dough}`).should('exist');

    testData.toppings.forEach(topping => {
      cy.contains(topping).should('exist');
    });
  });
});
