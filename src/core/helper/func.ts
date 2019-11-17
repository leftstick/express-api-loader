export type Procedure = (...args: any[]) => void

export type Options = {
  isImmediate: boolean
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  }
): F {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  // tslint:disable: no-function-expression
  return <any>function(this: any, ...args: any[]) {
    const context = this

    const doLater = function() {
      timeoutId = undefined
      if (!options.isImmediate) {
        func.apply(context, args)
      }
    }

    const shouldCallNow = options.isImmediate && timeoutId === undefined

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(doLater, waitMilliseconds)

    if (shouldCallNow) {
      func.apply(context, args)
    }
  }
}
