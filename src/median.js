'use strict';
/* @flow */

var medianSorted = require('./median_sorted'),
    numericSort = require('./numeric_sort');

/**
 * The [median](http://en.wikipedia.org/wiki/Median) is
 * the middle number of a list. This is often a good indicator of 'the middle'
 * when there are outliers that skew the `mean()` value.
 * This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
 * a method of finding a typical or central value of a set of numbers.
 *
 * The median isn't necessarily one of the elements in the list: the value
 * can be the average of two elements if the list has an even length
 * and the two central values are different.
 *
 * @param {Array<number>} x input
 * @returns {number} median value
 * @example
 * var incomes = [10, 2, 5, 100, 2, 1];
 * median(incomes); //= 3.5
 */
function median(x /*: Array<number> */)/*:number*/ {
    // Sorting the array makes it easy to find the center, but
    // use `.slice()` to ensure the original array `x` is not modified
    return medianSorted(numericSort(x));
}

module.exports = median;
