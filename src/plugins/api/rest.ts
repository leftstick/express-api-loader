import express from 'express'
import signale from 'signale'
import { Token, Service, Container } from 'typedi'
import { PluginRunner } from '@/src/core/plugin'
import { ProcessCtrl } from '@/src/core/env'
import { urlJoin, isEmpty } from '@/src/core/helper/object'

const PATH_SETS = {
  get: new Set(),
  post: new Set(),
  delete: new Set(),
  put: new Set(),
  patch: new Set()
}

type IParameterHandler = { (req: express.Request, res: express.Response): any } | undefined | null

interface IParameterInjector {
  [method: string]: IParameterHandler[]
}

const CONTROLLER_INSTANCES = new Map<any, any>()

const HANDLER_PARAMETER_INJECTORS = new Map<any, IParameterInjector>()

export interface IRestController {}

export const ExpressToken = new Token<express.Express>('global.express')
export const RestControllerToken = new Token<IRestController>('controllers')

export function setExpressApp(app: express.Express) {
  Container.set(ExpressToken, app)
}

export function RestController() {
  return (target: any) => {
    return Service({ id: RestControllerToken, multiple: true })(target)
  }
}

export function GetMapping(path: string) {
  return createMapping(path, 'get')
}

export function PostMapping(path: string) {
  return createMapping(path, 'post')
}

export function DeleteMapping(path: string) {
  return createMapping(path, 'delete')
}

export function PutMapping(path: string) {
  return createMapping(path, 'put')
}

export function PatchMapping(path: string) {
  return createMapping(path, 'patch')
}

type HTTP_METHOD = 'get' | 'post' | 'delete' | 'put' | 'patch'

function createMapping(path: string, httpMethod: HTTP_METHOD) {
  // tslint:disable-next-line: no-function-expression
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (PATH_SETS[httpMethod].has(path)) {
      signale.error(`${httpMethod} ${path} was registered multiple times, please verify your code first`)
      ProcessCtrl.stop()
      return
    }

    PATH_SETS[httpMethod].add(path)

    injectParameterDecorator(target, propertyKey, descriptor)

    registerAPI(target, propertyKey, path, httpMethod)

    return descriptor
  }
}

function injectParameterDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = function(req: express.Request, res: express.Response) {
    const injector = HANDLER_PARAMETER_INJECTORS.get(target)
    if (isEmpty(injector)) {
      return originalMethod.apply(this, [req, res])
    }
    const handlers = injector[propertyKey]

    if (isEmpty(handlers)) {
      return originalMethod.apply(this, [req, res])
    }

    const finalArgs: any[] = []

    handlers.forEach((handler, i) => {
      if (isEmpty(handler)) {
        if (i === 0) {
          return finalArgs.push(req)
        }
        if (i === 1) {
          return finalArgs.push(res)
        }
        // no valid handler found
        return finalArgs.push(null)
      }
      finalArgs.push(handler(req, res))
    })
    return originalMethod.apply(this, finalArgs)
  }

  return descriptor
}

function registerAPI(target: any, propertyKey: string, path: string, httpMethod: HTTP_METHOD) {
  const app = Container.get(ExpressToken)
  const { successResponseResolver, failureResponseResolver, prefix } = PluginRunner.getInstance(app).getUserConfig().api

  app[httpMethod](urlJoin(prefix, path), async (req: express.Request, res: express.Response) => {
    try {
      let instance = CONTROLLER_INSTANCES.get(target)
      if (isEmpty(instance)) {
        instance = Container.getMany(RestControllerToken).find(c => Object.getPrototypeOf(c) === target)
        CONTROLLER_INSTANCES.set(target, instance)
      }

      const result = await instance[propertyKey](req, res)
      res.json(successResponseResolver(result))
    } catch (error) {
      signale.error(error)
      res.json(failureResponseResolver(error))
    }
  })
}

function createParameterDecorator(handler: { (req: express.Request, res: express.Response): any }) {
  // tslint:disable-next-line: no-function-expression
  return function(target: any, methodName: string, paramIndex: number) {
    let injector = HANDLER_PARAMETER_INJECTORS.get(target)
    if (isEmpty(injector)) {
      injector = {}
      HANDLER_PARAMETER_INJECTORS.set(target, injector)
    }
    if (isEmpty(injector[methodName])) {
      // tslint:disable-next-line: prefer-array-literal
      injector[methodName] = new Array(target[methodName].length)
      injector[methodName].fill(null)
    }

    injector[methodName][paramIndex] = handler
  }
}

export function RequestQuery() {
  return createParameterDecorator((req: express.Request) => req.query)
}

export function RequestBody() {
  return createParameterDecorator((req: express.Request) => req.body)
}

export function RequestPathVariable() {
  return createParameterDecorator((req: express.Request) => req.params)
}

export function Request() {
  return createParameterDecorator((req: express.Request) => req)
}

export function Response() {
  return createParameterDecorator((req: express.Request, res: express.Response) => res)
}
