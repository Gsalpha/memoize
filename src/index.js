const equal = (a, b) => Object.is(a, b)
const memoize = (fn, equalFunc = equal) => {
    let cacheValue = null
    let lastArgs = []
    return (...args) => {
        if (
            cacheValue &&
            args.length === lastArgs.length &&
            args.every((arg, index) => equalFunc(arg, lastArgs[index]))
        ) {
            return cacheValue
        }
        lastArgs = args
        return (cacheValue = fn.apply(this, args))
    }
}

export default memoize
