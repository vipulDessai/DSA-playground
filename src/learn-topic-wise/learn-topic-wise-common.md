# Heap

## miscellaneous

- https://leetcode.com/problems/relative-ranks/
- https://leetcode.com/problems/furthest-building-you-can-reach/
- https://leetcode.com/problems/maximum-average-pass-ratio/ - comp fun
- https://leetcode.com/problems/remove-stones-to-minimize-the-total/ - need to keep track of max number of stones among all.
- https://leetcode.com/problems/find-median-from-data-stream/

# Binary Search - [leetcode link](https://leetcode.com/problems/binary-search/)

when to use :

1. Sorted Array or can sort it.
2. Range of the Answer is known + can check is the given answer possible for the question. (Have to find min/max possible answer)

## Binary search on the range of answer

- https://leetcode.com/problems/sqrtx/
- https://leetcode.com/problems/split-array-largest-sum/ - IMP
- https://leetcode.com/problems/first-bad-version/
- https://leetcode.com/problems/koko-eating-bananas/
- https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
- https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
- https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
- https://leetcode.com/problems/magnetic-force-between-two-balls/
- https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
- https://leetcode.com/problems/maximum-number-of-removable-characters/

### Template:

```c#
// The range is like "GGGGGGGGGGGGBBBBBBB" you need to find first B
    int firstBadVersion(int n) {
        int left = left edge of answer;
        int right = right edge of answer;
        // if(corner case - first ele is answer) return 1st ele
        while(left <= right) {
            int mid = left + (right - left) / 2;   // find mid
            if(isBadVersion(mid) && !isBadVersion(mid - 1))     // check if mid is answer or not.
                return mid;
            if(isBadVersion(m))       // check which side we should move left/ right
                r = m - 1;
            else
                l = m + 1;
        }
        return n;        // at the end return right end point if answer not found
    }
```

## variation of Normal Binary Search

- https://leetcode.com/problems/search-insert-position/
- https://leetcode.com/problems/search-in-rotated-sorted-array/
- https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
- https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
- https://leetcode.com/problems/guess-number-higher-or-lower/
- https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
- https://leetcode.com/problems/find-smallest-letter-greater-than-target/
- https://leetcode.com/problems/find-target-indices-after-sorting-array/

## Binary Search in Matrix

- https://leetcode.com/problems/search-a-2d-matrix/
- https://leetcode.com/problems/search-a-2d-matrix-ii/ - Not binary search Q but search in 2D matrix.

## Other

- https://leetcode.com/problems/median-of-two-sorted-arrays/ - VIMP
- https://leetcode.com/problems/find-peak-element/ - imp
- https://leetcode.com/problems/valid-triangle-number/
- https://leetcode.com/problems/my-calendar-i/
- https://leetcode.com/problems/missing-element-in-sorted-array/
- https://leetcode.com/problems/fixed-point/
- https://leetcode.com/problems/kth-missing-positive-number/
- https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/ - prefix sum

# Sliding window

## Fixed length sliding wd

- https://leetcode.com/problems/contains-duplicate-ii/
- https://leetcode.com/problems/find-all-anagrams-in-a-string/
- https://leetcode.com/problems/permutation-in-string/
- https://leetcode.com/problems/maximum-average-subarray-i/
- https://leetcode.com/problems/subarray-product-less-than-k/
- https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
- https://leetcode.com/problems/grumpy-bookstore-owner/
- https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
- https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
- https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
- https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
- https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
- https://leetcode.com/problems/distinct-numbers-in-each-subarray/
- https://leetcode.com/problems/k-radius-subarray-averages/
- https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/

## variable length sliding wd

- https://leetcode.com/problems/longest-substring-without-repeating-characters/
- https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
- https://leetcode.com/problems/minimum-size-subarray-sum/
- https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
- https://leetcode.com/problems/max-consecutive-ones-ii/
- https://leetcode.com/problems/fruit-into-baskets/
- https://leetcode.com/problems/binary-subarrays-with-sum/
- https://leetcode.com/problems/max-consecutive-ones-iii/
- https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
- https://leetcode.com/problems/maximum-erasure-value/
- https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/

## others

- https://leetcode.com/problems/maximum-length-of-repeated-subarray/
- https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
- https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

# Prefix Sum

when to use :

1. Use when we need to find answer of ranges but we dont update the elements
2. only with subarray not with subsequence

## Only PrefixSum

- https://leetcode.com/problems/running-sum-of-1d-array/
- https://leetcode.com/problems/range-sum-query-immutable/
- https://leetcode.com/problems/range-addition/
- https://leetcode.com/problems/car-pooling/
- https://leetcode.com/problems/corporate-flight-bookings/
- https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
- https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
- https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
- https://leetcode.com/problems/find-the-highest-altitude/
- https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/

## Only SuffexSum - PrefixSum + SuffexSum

- https://leetcode.com/problems/find-pivot-index/
- https://leetcode.com/problems/find-the-middle-index-in-array/
- https://leetcode.com/problems/find-good-days-to-rob-the-bank/

## PrefixSum + HashMap

- https://leetcode.com/problems/subarray-sum-equals-k/
- https://leetcode.com/problems/subarray-sums-divisible-by-k/

## Others

- https://leetcode.com/problems/product-of-array-except-self/

# Two Pointer / Three Pointers

## Two pointer in 1 Array

- https://leetcode.com/problems/container-with-most-water/
- https://leetcode.com/problems/3sum/
- https://leetcode.com/problems/3sum-closest/
- https://leetcode.com/problems/3sum-with-multiplicity/
- https://leetcode.com/problems/4sum/
- https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- https://leetcode.com/problems/next-permutation/
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- https://leetcode.com/problems/move-zeroes/
- https://leetcode.com/problems/intersection-of-two-arrays/
- https://leetcode.com/problems/sort-transformed-array/
- https://leetcode.com/problems/boats-to-save-people/
- https://leetcode.com/problems/sort-array-by-parity/
- https://leetcode.com/problems/sort-array-by-parity-ii/
- https://leetcode.com/problems/squares-of-a-sorted-array/
- https://leetcode.com/problems/watering-plants-ii/

## Two pointers in 2 array - Three pointers / Multiple pointers

- https://leetcode.com/problems/sort-colors/
- https://leetcode.com/problems/merge-sorted-array/
- https://leetcode.com/problems/is-subsequence/

## Intervals are Given :

- https://leetcode.com/problems/meeting-scheduler/
- https://leetcode.com/problems/remove-element/
- https://leetcode.com/problems/find-the-duplicate-number/
- https://leetcode.com/problems/interval-list-intersections/
- https://leetcode.com/problems/duplicate-zeros/
- https://leetcode.com/problems/the-k-strongest-values-in-an-array/
- https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
- https://leetcode.com/problems/rearrange-array-elements-by-sign/
- https://leetcode.com/problems/partition-array-according-to-given-pivot/
