import signale from 'signale'

import { join } from 'path'

import { cwd } from '@/src/core/env'

export interface IConfig {
  [index: string]: any
}

export function getRawUserConfig(): IConfig {
  try {
    // tslint:disable-next-line: non-literal-require
    const mod = require(join(cwd(), '.bootrc.ts'))
    return mod.default || mod
  } catch (error) {
    signale.warn('.bootrc.ts not found, preset config used')
    return {}
  }
}
