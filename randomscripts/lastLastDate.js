// June 7, FCC Daily Challenge
// Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days, return the number of full days of detergent you have remaining.

// Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.

function lastLoadDate(scoops, usage) {
    const getAvg = (usage) => usage.reduce((sum, currentValue) => sum + currentValue, 0) / usage.length;
    const fullDaysLeft = Math.floor((scoops/getAvg(usage)))
  return fullDaysLeft;
}

console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2])) // 12
