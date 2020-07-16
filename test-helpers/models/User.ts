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

@withUuid()
export default class User extends BaseModel {
  public uid: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public isAdmin: boolean

  @column()
  public companyId: number
}
