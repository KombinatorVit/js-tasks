let getAverage = (month1, month2, month3) => {
    let averagePerMonth = (month1 + month2 + month3) / 3;
    return averagePerMonth;
}
console.log(getAverage(35467, 29842, 38501));//dept1q1
console.log(getAverage(50301, 21984, 19207));//dept1q2
console.log(getAverage(70533, 50121, 33899))// dept2q1
console.log(getAverage(72381, 41562, 29465))//dept2q2

function printBonus(dept1AverSales, dept2AverSales) {
    let winner// = dept1AverSales > dept2AverSales;
    if (dept1AverSales > dept2AverSales) {
        winner = ((dept1AverSales - dept2AverSales) /dept2AverSales * 100) ;
        console.log(`По результатам первого квартала,первый отдел заработал больше на ${winner}`%)
    } else
        winner = ((dept2AverSales - dept1AverSales)/dept1AverSales * 100);
    console.log(`По результатам первого квартала,второй отдел заработал больше на ${winner}`%)

}
