/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Hipsjs/Lucid/Uuid' {
  import { LucidModel } from '@ioc:Adonis/Lucid/Model'

  /**
   * Lucid Uuid static contract
   */
  export interface LucidUuidContract {
    column?: string
    version?: string
    name?: string
    namespace?: string
    isPrimary?: boolean
  }

  interface UuidDecoratorContract {
    (options: LucidUuidContract): (model: LucidModel) => void;
  }

  export const withUuid: UuidDecoratorContract
}
