function findLeepYearOfAnArray(Years) {
    let findLeepYear = [];
    for (let i = 0; i < Years.length; i++) {
        let index = i;
        let findYears = Years[i];
        if (findYears % 4 === 0) {
            findLeepYear.push(findYears);
        }
        
    }
    return findLeepYear;
}


let leepYears = [2023, 2024, 2025, 2028, 2029, 2030, 2032, 2035];
let getResultOfLeepYear = findLeepYearOfAnArray(leepYears);
console.log(getResultOfLeepYear);
