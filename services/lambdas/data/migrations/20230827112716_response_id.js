/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  if (
    !(await knex.schema.hasTable('survey_responses')) ||
    (await knex.schema.hasColumn('response_id'))
  )
    return;

  return knex.schema.table('survey_responses', (table) => {
    table.string('response_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('survey_responses', (table) => {
    table.dropColumn('response_id');
  });
};
