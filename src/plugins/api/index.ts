import express from 'express'
import glob from 'glob'
import { resolve } from 'path'
import { isEmpty, isNotEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum, IPlugin } from '@/src/core/plugin/pluginType'
import { getProjectBaseRoot } from '@/src/core/env'
import { IPluginType } from '@/src/plugins/api/type'
import { BizError } from '@/src/plugins/api/type'

const defaultSuccessResponseResolver = (data: any) => {
  return {
    code: 200,
    data
  }
}

const defaultFailureResponseResolver = (error: BizError) => {
  return {
    code: error.code,
    message: error.message || 'Internal error'
  }
}

export default () => {
  return <IPlugin>{
    namespace: 'api',
    order: PluginOrderEnum.API_INIT,
    configHandler(config: IPluginType): IPluginType {
      const conf: IPluginType = {
        api: {
          scanDir: resolve(getProjectBaseRoot(), 'controllers'),
          prefix: '/apis',
          successResponseResolver: defaultSuccessResponseResolver,
          failureResponseResolver: defaultFailureResponseResolver
        }
      }

      if (isEmpty(config) || isEmpty(config.api)) {
        return conf
      }

      if (isNotEmpty(config.api.prefix) && isNotEmpty(conf.api)) {
        conf.api.prefix = config.api.prefix
      }

      if (isNotEmpty(config.api.successResponseResolver) && isNotEmpty(conf.api)) {
        conf.api.successResponseResolver = config.api.successResponseResolver
      }
      if (isNotEmpty(config.api.failureResponseResolver) && isNotEmpty(conf.api)) {
        conf.api.failureResponseResolver = config.api.failureResponseResolver
      }

      return conf
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (isEmpty(config.api)) {
        return
      }
      const controllerFiles = glob.sync('**/*.ts', {
        cwd: config.api.scanDir,
        absolute: true
      })

      return Promise.all(controllerFiles.map(f => import(f)))
    }
  }
}
