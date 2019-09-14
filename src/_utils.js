export const isEmpty = arr => !Array.isArray(arr) || !arr.length

export const isNotEmpty = arr => Array.isArray(arr) && arr.length

export const isNil = v => v === undefined || v === null
