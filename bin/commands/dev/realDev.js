process.env.NODE_ENV = 'development'
require('../../../build/babel/registerBabel')()
require('reflect-metadata')
const { Container } = require('typedi')
const express = require('express')
const { ___internal } = require('../../../libs')

const { pluginRunner, ExpressToken } = ___internal

const app = express()

Container.set(ExpressToken, app)

pluginRunner
  .firstStage(app)
  .then(() => {
    return pluginRunner.beforeApiInit(app)
  })

  .then(() => {
    return pluginRunner.apiInit(app)
  })
  .then(() => {
    return pluginRunner.afterApiInit(app)
  })
  .then(() => {
    pluginRunner.lastStage(app)
  })