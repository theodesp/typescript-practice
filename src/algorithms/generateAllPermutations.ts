/**
 * Generating all permutations of a set of n elements
 * For example, the permutations of {0,1,2} are (0,1,2), (0,2,1), (1,0,2), (1,2,0), (2,0,1) and (2,1,0)
 */


 function permute(str: string, l: number, r: number, result: string[])
 {
     if (l == r)
             result.push(str);
         else
         {
             for (let i = l; i <= r; i++)
             {
                 str = swap(str, l, i);
                 permute(str, l + 1, r, result);
                 str = swap(str, l, i);
             }
         }
 }
   
 function swap(s: string, i: number,j: number)
 {
    let temp;
    let charArray = s.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
 }

let result: string[] = [];
permute("ABC", 0, 2, result);
console.log(result);