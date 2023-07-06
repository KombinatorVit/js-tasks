

//[4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.


const array = [4, 2, 5, 19, 13, 0, 10];
const result = array
    .filter(el => el > 0)
    .map(el => Math.sqrt(el));

console.log(result);
