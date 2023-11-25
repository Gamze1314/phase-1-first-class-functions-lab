let array = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
}

console.log(returnFirstTwoDrivers(array)); 

function returnLastTwoDrivers(array) {
    return array.slice(-2);
}
console.log(returnLastTwoDrivers(array)); 


// selecting drivers 
function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
}

function returnLastTwoDrivers(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](array)); // Output: ['John', 'Jane']
console.log(selectingDrivers[1](array));


function createFareMultiplier(x) {
    return function () {
        return x**2;
}
}
const fareMultiplier = createFareMultiplier(5); 

function fareDoubler(x) { 
    return x*2; 
}
fareDoubler(10); 

function fareTripler(z) { 
    return z*3; 
}
fareTripler(12);



function selectDifferentDrivers(array, functionSelector) {
    return functionSelector(array);
}


const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);

console.log(firstTwo); 
console.log(lastTwo);