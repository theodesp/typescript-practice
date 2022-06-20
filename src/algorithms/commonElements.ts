/**
 * We are given two lists A and B that both contain n elements. Our task is to calculate the number of elements that belong
    to both of the lists
 */


function commonElements(listA: number[], listB: number[]): number[] {
    const sortedA  = listA.sort();
    const sortedB  = listB.sort();
    const result = [];
    let i =0, j = 0;
    for (i = 0;i<listA.length && j<listB.length;) {
        if (listA[i] == listB[j]) {
            result.push(listA[i]);
            i++;
            j++;
        } else if (listA[i] < listB[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

console.log(commonElements([5,2,8,9,4], [3,2,9,5]))