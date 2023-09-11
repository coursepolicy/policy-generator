/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  if (
    !(await knex.schema.hasTable('survey_responses')) ||
    (await knex.schema.hasColumn('raw_response'))
  )
    return;

  return knex.schema.table('survey_responses', (table) => {
    table.jsonb('raw_response');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('survey_responses', (table) => {
    table.dropColumn('raw_response');
  });
};
