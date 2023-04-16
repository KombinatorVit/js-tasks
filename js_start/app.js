const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calculateTips(bills[i]);
    tips.push(tip);
    totalBills.push(bills[i] + tip);
}

console.log(bills, tips, totalBills);

const calculateAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3]));
console.log(calculateAverage(totalBills));
console.log(calculateAverage(bills));
console.log(calculateAverage(tips));