/*
 * adonis-lucid-uuid
 *
 * (c) Remco Plasmeijer <remco.plasmeijer@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import {cleanup, setup} from '../test-helpers'
import {User} from '../test-helpers/models'
import Organisation from '../test-helpers/models/Organisation'

test.group('UUID Checks', (group) => {
  let user1: User

  group.before(async () => {
    await setup()
    User.boot()
  })

  group.after(async () => {
    await cleanup()
  })

  test('uid exists and is string after saving model', async (assert) => {
    user1 = new User()
    user1.fill({username: 'hips', email: 'remco.plasmeijer@gmail.com', isAdmin: true, companyId: 1})
    await user1.save()
    assert.isString(user1.uid)
  })

  test('uid is not overwritten when saving', async (assert) => {
    const user = new User()
    const uid = '5431a84e-0605-47b8-a186-d45ffa58ea5b'
    user.fill({username: 'hips2', email: 'remco.plasmeijer2@gmail.com', isAdmin: true, companyId: 1, uid})
    await user.save()
    assert.isTrue(uid === user.uid)
  })

  test('uid is written to other column', async (assert) => {
    const org = new Organisation()
    const uuid = '5431a84e-0605-47b8-a186-d45ffa58ea5b'
    org.fill({username: 'hips2', email: 'remco.plasmeijer2@gmail.com', isAdmin: true, companyId: 1, uuid})
    await org.save()

    // @ts-ignore
    assert.isUndefined(org.uid)
    assert.isTrue(uuid === org.uuid)
  })
})
