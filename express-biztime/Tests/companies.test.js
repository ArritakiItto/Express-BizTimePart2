const request = require('supertest');
const app = require('../app');

describe('POST /companies', () => {
  it('creates a new company and responds with the new company object', async () => {
    const newCompany = { name: 'Test Company', description: 'Just a test' };
    const response = await request(app).post('/companies').send(newCompany);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('company');
    expect(response.body.company).toMatchObject(newCompany);
  });
});

describe('GET /companies', () => {
  it('responds with a list of companies', async () => {
    const response = await request(app).get('/companies');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('companies');
  });
});

//jest --coverage