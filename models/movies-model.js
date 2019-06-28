const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('movies');
}

function findById(id) {
    return db('movies')
    .where({ id })
    .first()
}

async function add(movie) {
const [id] = await db('movies').insert(movie);

return findById(id);
}

function update(id, changes) {
    return db('movies')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('movies')
    .where({ id })
    .del();
}