function findOdd(number) {
    let result = [];
    for (let i = 0; i < number.length; i++) {
        let index = i;
        let element = number[i];
        if(element % 2 !==0){
            result.push(element);
        }
    }
    return result;
}

let numbers = [23, 24, 45, 44, 48, 56, 55, 89, 78, 41, 46, 89, 88, 78, 12];
let finalResult = findOdd(numbers);
console.log(finalResult);