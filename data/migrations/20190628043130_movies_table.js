exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies',
      table => {
        table.increments();

        table
            .string('title', 128)
            .notNullable()
            .unique()
        table
            .string('genre', 128)
            .notNullable()   
        table
            .integer('year')
            .unsigned()
      })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies')
};