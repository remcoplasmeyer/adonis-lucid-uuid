# Adonis Lucid UUID

> Works with @adonisjs/lucid@alpha (^8.*.*) (adonis preview v5)

Adds a decorator to Lucid models for a uuid. Uses the [uuid](https://github.com/uuidjs/uuid) package

## :page_facing_up: Installation

Make sure to install it using `npm` or `yarn`.

```bash
# npm
npm i --save adonis-lucid-uuid

# yarn
yarn add adonis-lucid-uuid@alpha
```

Make sure to register the provider inside `.adonisrc.json` file.

```json
"providers": [
  "@hipsjs/adonis-lucid-uuid"
]
```

For TypeScript projects add to `tsconfig.json` file:
```json
"compilerOptions": {
  "types": [
    "@hipsjs/adonis-lucid-uuid"
  ]
}
```

## :wrench: Usage

```typescript
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { withUuid } from '@ioc:Hipsjs/Lucid/Uuid'

@withUuid({ column: 'uid', version: 'v1' })
export default class User extends BaseModel {
  public uid: string
}
```

the `@withUuid` decorator supports the following options:
```
{
    column?: string
    version?: string
    name?: string
    namespace?: string
    isPrimary?: boolean
}
```

all options are optional and default to:
```
{
  column: 'uid',                                      
  version: 'v4', 									
  name: 'yourdomain.com',							
  namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  isPrimary: false,
}
```
Name and namespace option are passed for v3 and v5 of [uuid](https://github.com/uuidjs/uuid)

## :gear: Development
See `package.json` scripts

## :star: Show Your Support

Please give a :star: if this project helped you!

## :two_hearts: Contributing

If you have any questions or requests or want to contribute to `@hipsjs/adonis-lucid-uuid` or other packages, please write the [issue](https://github.com/remcoplasmeyer/adonis-lucid-uuid/issues) or send in a Pull Request freely.
