
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Always Be My Maybe', genre: 'comedy', year: 2019},
        {id: 2, title: 'Pursuit of Happyness', genre:'drama', year: 2006},
        {id: 3, title: 'Gemini Man', genre: 'sci-fi', year: 2019}
      ]);
    });
};
