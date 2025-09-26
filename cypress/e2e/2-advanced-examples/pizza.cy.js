describe('Pizza Order Form', () => {
  beforeEach(() => {
    // Her testten önce sipariş sayfasını ziyaret et
    cy.visit('http://localhost:5173/order');
  });

  it('should allow typing a name', () => {
    // İsim inputunu bul ve bir isim yaz
    cy.get('.name-input')
      .type('Ali Yücel')
      .should('have.value', 'Ali Yücel');
  });

  it('should allow selecting multiple toppings', () => {
    // Malzeme checkbox'larından 5 tanesini seç
    cy.get('.toppings-grid input[type="checkbox"]').eq(0).check(); // Pepperoni
    cy.get('.toppings-grid input[type="checkbox"]').eq(1).check(); // Sosis
    cy.get('.toppings-grid input[type="checkbox"]').eq(4).check(); // Soğan
    cy.get('.toppings-grid input[type="checkbox"]').eq(6).check(); // Mısır
    cy.get('.toppings-grid input[type="checkbox"]').eq(8).check(); // Sucuk

    // Seçilen malzemelerin state'e yansıdığını kontrol et (opsiyonel, ama iyi bir pratik)
    cy.get('.order-summary .summary-row span').eq(1).should('contain', '25.00'); // 5 toppings * 5₺
  });

  it('should fill the form, submit, and navigate to success page', () => {
    // Adım 1: Formu doldur
    cy.get('.name-input').type('Ahmet Kaya');
    cy.get('.radio-group input[value="M"]').check();
    cy.get('.dough-select').select('ince');
    cy.get('.toppings-grid input[type="checkbox"]').eq(0).check();
    cy.get('.toppings-grid input[type="checkbox"]').eq(2).check();
    cy.get('.toppings-grid input[type="checkbox"]').eq(5).check();
    cy.get('.toppings-grid input[type="checkbox"]').eq(7).check();
    cy.get('.notes-input').type('Lütfen bol acılı olsun!');

    // Adım 2: Formun gönderilebilir olduğundan emin ol
    cy.get('.btn-submit').should('not.be.disabled');

    // Adım 3: Formu gönder
    cy.get('form').submit();

    // Adım 4: Başarı sayfasına yönlendirildiğini doğrula
    cy.url().should('include', '/success');

    // Adım 5: Başarı sayfasında doğru bilgilerin gösterildiğini kontrol et
    cy.get('.success-title').should('contain', 'SİPARİŞİNİZ ALINDI');
    cy.get('.success-box').should('contain', 'M'); // Boyut
    cy.get('.success-box').should('contain', 'ince'); // Hamur
    cy.get('.success-box').should('contain', 'Pepperoni'); // Malzeme
  });
});
