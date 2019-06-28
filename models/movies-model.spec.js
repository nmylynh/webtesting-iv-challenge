// our connection to the database
const db = require('../data/dbConfig.js');

// the data access file we are testing
const { add } = require('./movies-model');

describe('movies model', () => {
    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('movies').truncate();
      });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('add()', () => {
        // this example uses async/await to make it easier to read and understand
        it('should add the provided movies into the db', async () => {
        // this code expects that the table is empty, we'll handle that below
        // add data to the test database using the data access file
        await add({ title: 'John Wick', genre: 'action', year: 2014 });
        await add({ title: 'John Wick: Chapter 2', genre: 'action', year: 2017 });
        await add({ title: 'John Wick: Chapter 3', genre: 'action', year: 2019 });

        // read data from the table
        const movies = await db('movies');

        // verify that there are now two records added
        expect(movies).toHaveLength(3);
        });
        it('should add the provided movie', async () => {
            const movie = { title: 'The Fellowship of the Ring', genre:'fantasy', year: 2001 };
            const added = await add(movie);

            const movies = await db('movies');

            expect(added.title).toBe(movie.title);
        });
    });
});