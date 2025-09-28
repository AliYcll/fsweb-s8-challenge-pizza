describe('Pizza Order Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order'); 
  });

  it('should enter text into the name input', () => {
    cy.get('input.name-input').type('Ali Yücel').should('have.value', 'Ali Yücel');
  });

  it('should select multiple toppings', () => {
    cy.contains('label', 'Pepperoni').find('input').check();
    cy.contains('label', 'Biber').find('input').check();
    cy.contains('label', 'Mısır').find('input').check();
    cy.contains('label', 'Sosis').find('input').check();
  });

  it('should submit the form', () => {
    cy.get('input.name-input').type('Ali Yücel');
    cy.get('input[name="size"][value="M"]').parent('label').click();
    cy.get('select.dough-select').select('İnce');
    cy.contains('label', 'Pepperoni').find('input').check();
    cy.contains('label', 'Biber').find('input').check();
    cy.contains('label', 'Mısır').find('input').check();
    cy.contains('label', 'Sosis').find('input').check();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/success');
  });
});
