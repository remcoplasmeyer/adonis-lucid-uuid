/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>sdf
 *
 * For the full copyright and license information, please va
 */

import { IocContract } from '@adonisjs/fold'
import withUuid from '../src/Decorator'

/**
 * Provider to register lucid uuid with the IoC container
 */
export default class LucidUuidProvider {
  constructor (protected container: IocContract) {
  }

  public register (): void {
    this.container.singleton('Hipsjs/Lucid/Uuid', () => ({
      withUuid,
    }))
  }
}
