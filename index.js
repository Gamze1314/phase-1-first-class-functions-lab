let array = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const myFunction = returnFirstTwoDrivers = () => {
     return array.slice(0,2);
     
};

const firstTwoDrivers = returnFirstTwoDrivers();
console.log(firstTwoDrivers);



const myFunction2 = returnLastTwoDrivers = () => {
     return array.slice(2,4);
     
};

const lastTwoDrivers = returnLastTwoDrivers();
console.log(lastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log("Selecting drivers:", selectingDrivers);

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