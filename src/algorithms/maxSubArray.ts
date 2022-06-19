/**
 * Given an array of n numbers, our task is to calculate the maximum subar- ray sum,
 */

function maxSubArray(array: number[]): number {
    let best = 0, sum = 0;
    for (let i=0;i<array.length;i++) {
        sum = Math.max(array[i], sum + array[i]);
        best = Math.max(best, sum);
    }
    return best
}
console.log(maxSubArray([-1, 2,4,-3, 5,2,-5,2]))