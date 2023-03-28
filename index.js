
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return function(fare) {return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverSelect) => {

    return driverSelect === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers);

}