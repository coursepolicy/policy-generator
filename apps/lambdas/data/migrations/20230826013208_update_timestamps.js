/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('survey_responses', function (table) {
    table.timestamp('created_at').defaultTo(knex.fn.now()).alter();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('survey_responses', function (table) {
    table.timestamp('created_at').defaultTo(null).alter();
    table.timestamp('updated_at').defaultTo(null).alter();
  });
};
