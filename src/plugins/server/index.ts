import express from 'express'
import signale from 'signale'
import os from 'os'
import path from 'path'
import { cwd } from '@/src/core/env'
import { isEmpty, isString } from '@/src/core/helper/object'
import { InternalPluginOrderEnum } from '@/src/core/env/lifecycle'
import { IPluginType } from '@/src/plugins/server/type'
import { IPlugin } from '@/src/plugins/plugin'

export default () => {
  return <IPlugin>{
    namespace: 'server',
    order: InternalPluginOrderEnum.FINAL_STAGE,
    configHandler(config: IPluginType): IPluginType {
      if (isEmpty(config) || isEmpty(config.server)) {
        return {
          server: {
            port: 8080,
            staticDir: path.resolve(cwd(), 'public')
          }
        }
      }

      return {
        server: {
          port: isEmpty(config.server.port) ? 8080 : config.server.port,
          staticDir: isEmpty(config.server.staticDir) ? path.resolve(cwd(), 'public') : config.server.staticDir
        }
      }
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (
        isEmpty(config) ||
        isEmpty(config.server) ||
        isEmpty(config.server.port) ||
        isEmpty(config.server.staticDir)
      ) {
        signale.error('No server config found')
        return
      }

      const { port, staticDir } = config.server

      if (isString(staticDir)) {
        app.use(express.static(staticDir))
      }

      return new Promise(resolve => {
        app.listen(port, '0.0.0.0', () => {
          const addresses = getIpAddresses()
          signale.success(`App running at below link${addresses.length > 1 ? 's' : ''}:`)

          addresses.forEach(ip => {
            signale.info(`http://${ip}:${port}`)
            resolve()
          })
        })
      })
    }
  }
}

function getIpAddresses() {
  const ifaces = os.networkInterfaces()

  return Object.values(ifaces)
    .reduce((p, c) => p.concat(c), [])
    .filter(iface => iface.family === 'IPv4')
    .map(iface => iface.address)
}
