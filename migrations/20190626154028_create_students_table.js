
exports.up = function(knex) {
    return knex.schema.createTable('students', function(table){
        table.increments();
        table.string('name', 255).notNullable().unique();

        table
            .integer('cohort_id')
            .unsigned()
            .references('id')
            .inTable('cohorts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  
};
