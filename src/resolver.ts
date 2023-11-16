import type { Resolver } from 'unplugin-auto-import/types'

import { ahooksBuiltInHooks } from './preset'

export const ahooksResolver = (): Resolver => ({
  type: 'component',
  resolve: (originName: string) => {
    if (ahooksBuiltInHooks.includes(originName)) {
      return {
        from: 'ahooks',
        name: originName
      }
    }
    return undefined
  }
})
