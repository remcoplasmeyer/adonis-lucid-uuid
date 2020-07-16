import Knex from 'knex'

export async function setupUsersTable (db: Knex) {
  const hasUsers = await db.schema.hasTable('users')
  if (!hasUsers) {
    await db.schema.createTable('users', (table) => {
      table.increments()
      table.string('uid')
      table.string('username').unique()
      table.string('email').unique()
      table.boolean('is_admin')
      table.string('password')
      table.integer('company_id')
      table.timestamps()
    })
  }
}
