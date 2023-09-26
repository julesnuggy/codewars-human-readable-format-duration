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

const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now';
  }

  const timePortions = calculateTimePortions(seconds);
  return timePortions;
}

console.log(formatDuration(63999999));
