
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', function(table){
      table.increments();
      table.string('name', 255).notNullable().unique();
  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cohorts');
};
