const supertest = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/')
                .expect(200);
            });
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8');
            });
        });
    });
