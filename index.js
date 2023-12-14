const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice (0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(lastdrivers) {
    return lastdrivers.slice (-2);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function(x) {
        return fareMultiplier * x;
    }
}
createFareMultiplier();

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)