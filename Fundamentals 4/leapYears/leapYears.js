let year= []; 

const leapYears = function(Year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return ("equal true");
    } else {
        return ("equal false");
    }
}

module.exports = leapYears
