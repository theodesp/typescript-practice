/**
 * A popcorn costs 7$, a soda costs 2.5$, when bought together they cost 9$.
Given an input list of dates and the name of the items bought, find the total amount spent. 
All pairs of soda and popcorn should be treated as a bundle if they were bought on the same date, even if they are not bought one after the other.
 */
const productPriceList: { [key: string]: number; } = {
    popcorn: 7,
    soda: 2.5,
    bundle: 9
};


const purchases = [
    {item: 'popcorn', date: '10-10-20'},
    {item: 'soda', date: '11-10-20'},
    {item: 'popcorn', date: '12-10-20'},
    {item: 'popcorn', date: '13-10-20'},
    {item: 'soda', date: '11-10-20'},
    {item: 'soda', date: '12-10-20'},
    {item: 'soda', date: '14-10-20'},
    {item: 'popcorn', date: '14-10-20'},
    {item: 'soda', date: '14-10-20'},
];

type Purchase = typeof purchases[0];
function calculateTotal(purchases: Purchase[]): number {
    const byDate = new Map<string, string[]>();
    for (let item of purchases) {
        if (!byDate.has(item['date'])) {
            byDate.set(item['date'], []);
            
        }
        byDate.get(item['date'])?.push(item['item']);
    }
    console.debug(byDate);
    const checkoutItems = new Set<string>();
    let total = 0;
    for (let date of byDate.keys()) {
        for (let v of byDate.get(date)!) {
            if (v === 'popcorn') {
                if (checkoutItems.has('soda')) {
                    checkoutItems.delete('soda');
                    total += productPriceList['bundle'];
                } else {
                    checkoutItems.add(v);
                }
            } else {
                if (checkoutItems.has('popcorn')) {
                    checkoutItems.delete('popcorn');
                    total += productPriceList['bundle'];
                } else {
                    checkoutItems.add(v);
                }
            }
        }
    }
    
    for (let val in checkoutItems) {
        total += productPriceList[val];
      }
      console.log(total)
    return total;
}

calculateTotal(purchases);
