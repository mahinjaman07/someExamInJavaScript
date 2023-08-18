function findLeepYear(year) {
    if (year % 4 === 0 ) {
        return true;
    }
    else{
        return false;
    }
}

let sumYear = findLeepYear(2040);
console.log(sumYear);
let sumYear1 = findLeepYear(2069);
console.log(sumYear1);
