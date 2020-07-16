import Knex from 'knex'

export async function setupOrganisationsTable (db: Knex) {
  const hasUsers = await db.schema.hasTable('organisations')
  if (!hasUsers) {
    await db.schema.createTable('organisations', (table) => {
      table.increments()
      table.string('uuid')
      table.string('username').unique()
      table.string('email').unique()
      table.boolean('is_admin')
      table.string('password')
      table.integer('company_id')
      table.timestamps()
    })
  }
}
