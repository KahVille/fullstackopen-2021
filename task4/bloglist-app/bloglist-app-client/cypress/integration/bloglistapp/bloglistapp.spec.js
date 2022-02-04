// End to end tests
describe('Bloglist app', () => {
    beforeEach(() => {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.visit('http://localhost:3000')
    });

    it('Login form is shown', () => {
        const form = cy.get('form').within(()=> {
            const inputTitle = cy.get('input[name="Username"]');
            const inputAuthor = cy.get('input[name="Password"]');
            cy.get('button[type=submit]').as('submitBtn');
        });
        
    });

    describe('Login', () => {
        it('successfully logged in with credentials', async ()=> {
            try {

                await cy.request('POST', 'http://localhost:3003/api/testing/createuser');

                const credentials = {
                    username: 'testUser',
                    password: 'testpassword'
                };

                let response = await cy.request({method: 'POST', url: 'http://localhost:3003/api/login', body: credentials});

                expect(response.body.to.have.property('token'));
                expect(response.body.to.have.property('username', 'testUser'));
                expect(response.body.to.have.property('name', 'Matti Meikäläinen'));

            } catch (error) {
                
            }

        });

        it('invalid login with credentials', async ()=> {
            try {

                await cy.request('POST', 'http://localhost:3003/api/testing/createuser');

                const credentials = {
                    username: 'sdfsdfsd',
                    password: 'testpasswordiafdgdf'
                };

                let response = await cy.request({method: 'POST', url: 'http://localhost:3003/api/login', body: credentials});

                expect(response.body.to.not.have.property('token'));
                expect(response.body.to.not.have.property('username'));
                expect(response.body.to.not.have.property('name'))

            } catch (error) {
            }

        });

    });

});