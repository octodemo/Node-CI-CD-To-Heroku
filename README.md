![Fedex Fibonacci CI & Build](https://github.com/octodemo/fedex-demo/workflows/Fedex%20Fibonacci%20CI%20&%20Build/badge.svg?branch=master)

Demonstrates CI/CD with GitHub Actions and Packages.

A Fibonacci Number is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5 etc.

# fib-tools

## Get the nth Number

```javascript
const {getNumber} = require('@bbq-beets/fib-tools')
assert.strictEqual(getNumber(8), 21)
```asdfasdfadsf

## Get a List of Numbers

```javascript
const {getList} = require('@bbq-beets/fib-tools')
assert.strictDeepEqual(getList(8), [0, 1, 1, 2, 3, 5, 8, 13, 21])
```

## Get a Sequence of Numbers

```javascript
const {getSequence} = require('@bbq-beets/fib-tools')

const seq = getSequence()

for (const n of seq) {
  console.log(n) // The next Fibonacci number in the sequence
}
```
