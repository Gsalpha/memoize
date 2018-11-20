const equal = (a, b) => Object.is(a, b)
const memoize = fn => {
    let cacheValue = null
    let lastArgs = []
    return (...args) => {
        if (
            cacheValue &&
            args.length === lastArgs.length &&
            args.every((arg, index) => equal(arg, lastArgs[index]))
        ) {
            return cacheValue
        }
        lastArgs = args
        return (cacheValue = fn.apply(this, args))
    }
}

export default memoize
