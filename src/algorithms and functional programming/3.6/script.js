export const compose = (...fns) => (args) => fns.reduceRight((currentValue, nextFunc) => nextFunc(currentValue), args);

