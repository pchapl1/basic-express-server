const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing server', ()=> {
    test('should come back with 404 on a bad route', async ()=> {
        const response = await request.get('/nonexistent');
        expect(response.status).toEqual(404);
    })

    test('should return 500 with no name in query', async ()=> {
        const response = await request.get('/person');
    })

    test('should return 200 with name in query', async ()=> {
        const response = await (request.get('/person/?Phil'));
        expect(response.status).toEqual(200);
    })
})