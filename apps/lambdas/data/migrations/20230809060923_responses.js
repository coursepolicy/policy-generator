/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function up(knex) {
  if (await knex.schema.hasTable("survey_responses")) return;

  return knex.schema.createTable("survey_responses", (table) => {
    table.string("id").primary().notNullable();
    table.jsonb("results").notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function down(knex) {
  return knex.schema.dropTableIfExists("survey_responses");
};
