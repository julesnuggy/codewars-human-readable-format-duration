const SECONDS_IN_UNIT = {
  year: 31536000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const calculateTimePortions = (seconds) => {
  // Stores to total number of whole units for each time-unit
  // e.g. ['2 years', '10 days', ...]
  const timePortions = [];
  let remainingTime = seconds;

  // [['year', 31536000], ['day', 86400], ...]
  Object.entries(SECONDS_IN_UNIT).forEach(entry => {
    const [unitMeasure, unitValue] = entry;
    const numberOfUnits = remainingTime/unitValue;

    if(numberOfUnits > 1) {
      const wholeNumberOfUnits = Math.floor(numberOfUnits);
      const unit = wholeNumberOfUnits > 1 ? `${unitMeasure}s` : unitMeasure;
      timePortions.push(`${wholeNumberOfUnits} ${unit}`);
      remainingTime -= wholeNumberOfUnits*unitValue;
    }
  });

  return timePortions;
}

const createStringDuration = (timePortions) => {
  let result = '';

  timePortions.forEach((portion, index) => {
    if (timePortions.length === 1) {
      // 1. If there is just 1 portion in the array, just return that.
      result = portion;
    } else if (index === timePortions.length - 1) {
      // Skip to 2 below first...
      // 3. When we get to the last potion, remove the penultimate time portion's
      // ", ", then add the string "and " and then the string of the final time portion.
      result = result.slice(0, -2) + ` and ${portion}`
    } else {
      // 2. If there is more than 1 portion in the array, then concatenate the strings
      // adding the ", " to the end of each time portion.
      result += `${portion}, `
    }
  });

  return result;
}

const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now';
  }

  const timePortions = calculateTimePortions(seconds);
  return createStringDuration(timePortions);
}

console.log(formatDuration(63999999));
