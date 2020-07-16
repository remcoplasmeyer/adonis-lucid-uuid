/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import BaseModel from './BaseModel'
import { column } from '@adonisjs/lucid/build/src/Orm/Decorators'
import withUuid from '../../src/Decorator'

// v2 is invalid
@withUuid({ column: 'uuid', version: 'v3'})
export default class InvalidOrganisation extends BaseModel {
  public static table = 'organisations'
  public uuid: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public isAdmin: boolean

  @column()
  public companyId: number
}
