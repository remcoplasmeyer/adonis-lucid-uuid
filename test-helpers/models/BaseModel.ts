/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ioc } from '../mocks/ioc'
import { adapter } from '../index'
import {LucidModel} from '@ioc:Adonis/Lucid/Model'
import {BaseModel} from '@adonisjs/lucid/build/src/Orm/BaseModel'

BaseModel.$container = ioc
BaseModel.$adapter = adapter

export default BaseModel as unknown as LucidModel
