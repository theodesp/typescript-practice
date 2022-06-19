/** 
 * Given a list of products with a price and popularity rating, 
 * order them based on price and use popularity as a tiebreaker.
 */

const products = [
    {price: 10, popularity: 6},
    {price: 20, popularity: 8},
    {price: 15, popularity: 10},
    {price: 8, popularity: 2},
    {price: 50, popularity: 10},
    {price: 18, popularity: 9},
    {price: 12, popularity: 4},
    {price: 6, popularity: 9},
    {price: 6, popularity: 10},
    {price: 10, popularity: 6},
];

type ProductType = typeof products[0];

function sortProducts(products: ProductType[]) {
    return products.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        return -(a.popularity - b.popularity);
    })
}

console.log(sortProducts(products))