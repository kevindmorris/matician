# Matician 1.0.0

- [add](#add)
- [binomial](#binomial)
- [combination](#combination)
- [divide](#divide)
- [exp](#exp)
- [factorial](#factorial)
- [mean](#mean)
- [meanBy](#meanBy)
- [median](#median)
- [medianBy](#medianBy)
- [multiply](#multiply)
- [permutation](#permutation)
- [poisson](#poisson)
- [pow](#pow)
- [root](#root)
- [sqrt](#sqrt)
- [stdev](#stdev)
- [stdevBy](#stdevBy)
- [subtract](#subtract)
- [sum](#sum)
- [sumBy](#sumBy)
- [variance](#variance)
- [varianceBy](#varianceBy)

---

### <a id="add"></a>`add(augend, addend)`

Compute the sum of two numbers.

#### Arguments

1. `augend` _(number)_: A number to which another number is added.
2. `addend` _(number)_: A number which is added to another number.

#### Returns

_(number)_: Returns the sum.

#### Example

```js
add(3, 2);
// => 5
```

---

### <a id="binomial"></a>`binomial(n, x, p)`

A discrete probability distribution that represents the likelihood of `x` successes in `n` trials, each with a probability of success `p`.

#### Arguments

1. `n` _(number)_: The number of trials.
2. `x` _(number)_: The number of successes.
3. `p` _(number)_: The probability of a success.

#### Returns

_(number)_: Returns the probability of observing a specific number of successful outcomes in a specified number of trials.

#### Example

```js
binomial(5, 1, 0.5);
// => 0.15625
```

---

### <a id="combination"></a>`combination(n, r, [options])`

The number of ways to choose a sample of `r` elements from a set of `n` distinct objects where order does not matter.

#### Arguments

1. `n` _(number)_: The number of objects.
2. `r` _(number)_: r The size of the sample.
3. `[options]` _(Object)_: The options object.
4. `[options.replacement=false]` _(boolean)_: Allow for replacement or not.

#### Returns

_(number)_: The number of combinations.

#### Example

```js
combination(10, 2);
// => 45
```

---

### <a id="divide"></a>`divide(dividend, divisor)`

Compute the quotient of two numbers.

#### Arguments

1. `dividend` _(number)_: A number which is divided by another number.
2. `divisor` _(number)_: A number by which another number is divided.

#### Returns

_(number)_: Returns the quotient.

#### Example

```js
divide(3, 2);
// => 1.5
```

---

### <a id="exp"></a>`exp(x)`

Compute the value of a `e` raised to a specified power.

#### Arguments

1. `x` _(number)_: A numeric expression representing the power of `e`.

#### Returns

_(number)_: Returns `e` (the base of natural logarithms) raised to a power.

#### Example

```js
exp(2);
// => 7.38905609893
```

---

### <a id="factorial"></a>`factorial(n)`

Compute the factorial of non-negative integer `n`.

#### Arguments

1. `n` _(number)_: A non-negative integer.

#### Returns

_(number)_: Returns the product of all positive integers less than or equal to `n`.

#### Example

```js
factorial(4);
// => 24
```

---

### <a id="mean"></a>`mean(array)`

Compute the mean of numbers in an array.

#### Arguments

1. `array` _(Array)_: An array of numbers.

#### Returns

_(number)_: Returns the mean.

#### Example

```js
mean([1, 2, 3, 4]);
// => 2.5
```

---

### <a id="meanBy"></a>`meanBy(array, iteratee)`

Compute the mean of numbers in an array by the specified `iteratee` invoked on each element in the array.

#### Arguments

1. `array` _(Array)_: An array.
2. `iteratee` _(Function)_: The iteratee invoked on each element.

#### Returns

_(number)_: Returns the mean.

#### Example

```js
meanBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }], (o) => o.x);
// => 2.5
```

---

### <a id="median"></a>`median(array)`

Compute the median of numbers in an array.

#### Arguments

1. `array` _(Array)_: An array of numbers.

#### Returns

_(number)_: Returns the median.

#### Example

```js
median([1, 2, 3]);
// => 2
```

---

### <a id="medianBy"></a>`medianBy(array, iteratee)`

Compute the median of numbers in an array by the specified `iteratee` invoked on each element in the array.

#### Arguments

1. `array` _(Array)_: An array.
2. `iteratee` _(Function)_: The iteratee invoked on each element.

#### Returns

_(number)_: Returns the median.

#### Example

```js
medianBy([{ x: 1 }, { x: 2 }, { x: 3 }], (o) => o.x);
// => 2
```

---

### <a id="multiply"></a>`multiply(multiplier, multiplicand)`

Compute the product of two numbers.

#### Arguments

1. `multiplier` _(number)_: A number by which a number is multiplied.
2. `multiplicand` _(number)_: A number which is multiplied by another.

#### Returns

_(number)_: Returns the product.

#### Example

```js
multiply(3, 2);
// => 6
```

---

### <a id="permutation"></a>`permutation(n, r, [options])`

The number of ways to choose a sample of `r` elements from a set of `n` distinct objects where order does matter.

#### Arguments

1. `n` _(number)_: The number of objects.
2. `r` _(number)_: r The size of the sample.
3. `[options]` _(Object)_: The options object.
4. `[options.replacement=false]` _(boolean)_: Allow for replacement or not.

#### Returns

_(number)_: The number of permutations.

#### Example

```js
permutation(10, 2);
// => 90
```

---

### <a id="poisson"></a>`poisson(lambda, x)`

A discrete probability distribution that represents the likelihood of `x` events occurring in a fixed interval of time if these events occur with a known constant mean rate and independently of the time since the last event.

#### Arguments

1. `lambda` _(number)_: The expected number of events in a given time period.
2. `x` _(number)_: The number of events in a time period.

#### Returns

_(number)_: Returns the probability of `x` events in a time period.

#### Example

```js
poisson(0.5, 1);
// => 0.30327
```

---

### <a id="pow"></a>`pow(x, y)`

Compute the value of a base expression raised to a specified power.

#### Arguments

1. `x` _(number)_: The base value of the expression.
2. `y` _(number)_: The exponent value of the expression.

#### Returns

_(number)_: Returns the base expression raised to the specified power.

#### Example

```js
pow(3, 2);
// => 9
```

---

### <a id="root"></a>`root(x, y)`

Compute the specified root of a number.

#### Arguments

1. `x` _(number)_: A number.
2. `y` _(number)_: The specifed root.

#### Returns

_(number)_: Returns the `y`th root of a number.

#### Example

```js
root(27, 3);
// => 3
```

---

### <a id="sqrt"></a>`sqrt(x)`

Compute the square root of a number.

#### Arguments

1. `x` _(number)_: A number.

#### Returns

_(number)_: Returns the square root of a number.

#### Example

```js
sqrt(9);
// => 3
```

---

### <a id="stdev"></a>`stdev(array)`

Compute the standard deviation of numbers in an array.

#### Arguments

1. `array` _(Array)_: An array of numbers.

#### Returns

_(number)_: Returns the standard deviation.

#### Example

```js
stdev([1, 2, 3]);
// => 1
```

---

### <a id="stdevBy"></a>`stdevBy(array, iteratee)`

Compute the standard deviation of numbers in an array by the specified `iteratee` invoked on each element in the array.

#### Arguments

1. `array` _(Array)_: An array.
2. `iteratee` _(Function)_: The iteratee invoked on each element.

#### Returns

_(number)_: Returns the standard deviation.

#### Example

```js
stdevBy([{ x: 1 }, { x: 2 }, { x: 3 }], (o) => o.x);
// => 1
```

---

### <a id="subtract"></a>`subtract(minuend, subtrahend)`

Compute the difference between two numbers.

#### Arguments

1. `minuend` _(number)_: A number from which another number is subtracted.
2. `subtrahend` _(number)_: A number which is subtracted from another.

#### Returns

_(number)_: Returns the difference.

#### Example

```js
subtract(3, 2);
// => 1
```

---

### <a id="sum"></a>`sum(array)`

Compute the sum of numbers in an array.

#### Arguments

1. `array` _(Array)_: An array of numbers.

#### Returns

_(number)_: Returns the sum.

#### Example

```js
sum([1, 2, 3, 4]);
// => 10
```

---

### <a id="sumBy"></a>`sumBy(array, iteratee)`

Compute the sum of numbers in an array by the specified `iteratee` invoked on each element in the array.

#### Arguments

1. `array` _(Array)_: An array.
2. `iteratee` _(Function)_: The iteratee invoked on each element.

#### Returns

_(number)_: Returns the sum.

#### Example

```js
sumBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }], (o) => o.x);
// => 10
```

---

### <a id="variance"></a>`variance(array)`

Compute the variance of numbers in an array.

#### Arguments

1. `array` _(Array)_: An array of numbers.

#### Returns

_(number)_: Returns the variance.

#### Example

```js
variance([1, 2, 3, 4, 5]);
// => 2.5
```

---

### <a id="varianceBy"></a>`varianceBy(array, iteratee)`

Compute the variance of numbers in an array by the specified `iteratee` invoked on each element in the array.

#### Arguments

1. `array` _(Array)_: An array.
2. `iteratee` _(Function)_: The iteratee invoked on each element.

#### Returns

_(number)_: Returns the variance.

#### Example

```js
varianceBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }], (o) => o.x);
// => 10
```
