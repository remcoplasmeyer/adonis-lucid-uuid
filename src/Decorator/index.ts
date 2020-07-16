/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {LucidUuidContract} from '@ioc:Hipsjs/Lucid/Uuid'
import {LucidModel, LucidRow} from '@ioc:Adonis/Lucid/Model'

interface UuidOptions {
  column: string
  version: string
  name: string
  namespace: string
  isPrimary: boolean
}

export default function (options?: LucidUuidContract) {
  return <T extends LucidModel>(model: T) => {
    model.boot()

    const defaultUuidOptions: UuidOptions = {
      column: 'uid', // default field / column
      version: 'v4', // default version
      name: 'yourdomain.com', // default name used in v3 and v5
      namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', // default namespace used in v3 and v5
      isPrimary: false,
    }
    const uuidOptions = Object.assign(defaultUuidOptions, options)

    const {version, namespace, column, name, isPrimary} = uuidOptions
    const allowedVersions = ['v1', 'v3', 'v4', 'v5']
    if(!allowedVersions.includes(version)) {
      throw Error(`Trying to use invalid version for uuid: ${version}`)
    }

    // add column, always a string
    const columnOptions = {
      meta: {
        columnName: column,
        isPrimary: isPrimary,
        type: 'string',
      },
    }
    model.$addColumn(column, columnOptions)

    // add hook
    model.before('create', (modelInstance: LucidRow) => {
      if (!modelInstance.$dirty[column]) {
        let uuid: Function = () => {}
        if (version === 'v1' || version === 'v4') {
          uuid = require('uuid')[version]()
        } else {
          uuid = require('uuid')[version](name, namespace)
        }

        modelInstance[column] = uuid
      }
    })
  }
}
