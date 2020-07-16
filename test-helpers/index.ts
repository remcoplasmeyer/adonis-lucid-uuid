/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {join} from 'path'
import {Filesystem} from '@poppinss/dev-utils'
import knex from 'knex'
import {Adapter} from '@adonisjs/lucid/build/src/Orm/Adapter'
import {SqliteConfig} from '@ioc:Adonis/Lucid/Database'
import {setupDB} from './mocks/ioc'
import {setupUsersTable} from './db-helpers/setupUsers'
import {setupOrganisationsTable} from "./db-helpers/setupOrganisations";

const fs = new Filesystem(join(__dirname, '__app'))

export const dbConfig: SqliteConfig = {
  client: 'sqlite',
  connection: {filename: join(fs.basePath, 'db.sqlite3')},
  debug: false,
  useNullAsDefault: true,
}
const db = knex(dbConfig)

export const database = setupDB(dbConfig)
export const adapter = new Adapter(database)

export async function setup () {
  await fs.ensureRoot()
  await setupUsersTable(db)
  await setupOrganisationsTable(db)
}

export async function cleanup () {
  await db.schema.dropTableIfExists('users')
  await database.manager.closeAll(true)
  await db.destroy()
  await fs.cleanup()
}

/**
 * Split string to an array using cross platform new lines
 */
export function toNewlineArray (contents: string): string[] {
  return contents.split(/\r?\n/)
}
