/**
 * Write a program that is going to receive an array of unique integers 
 * in ascending order. 
 * You program must return a list of list of integers with the begin 
 * and the end of each sequence.
Example 1:
input: {1,3,4} output: {(1,1), (3,4)}

Example 2:
input: {1,2,3,5,6,8} output: {(1,3), (5,6), (8,8)}

 */

function integerRanges(ints: number[]): [number, number][] {
    let prev = ints[0];
    const result = [];
    let diff = 0;
    let start = ints[0];
    for (let i=1; i< ints.length-1;i += 1) {
        if ((prev + 1) !== ints[i]) {
            result.push([start, start + diff]);
            diff = 0;
            start = ints[i];
        } else {
            diff += 1;
        }
    }
    return result as [number, number][];
}

console.debug(integerRanges([1,3,4]));
console.debug(integerRanges([1,2,3,5,6,8]));