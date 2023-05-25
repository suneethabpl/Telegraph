it("Lighthouse testing", ()=>{
    cy.visit(Cypress.env('baseUrl'));
    cy.lighthouse(
        {
            performance: 20,
            accessibility: 75,
            "best-practices": 70,
            seo:80,
        },
        {
           formFactor:"desktop",
            screenEmulation:{
                mobile:false,
                disable:false,
                width:Cypress.config("viewportWidth"),
                height:Cypress.config("viewportHeight"),
                deviceScaleRatio:1,       
            }
        }
    )
})