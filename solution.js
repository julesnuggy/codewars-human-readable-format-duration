const SECONDS_IN_UNIT = {
  year: 31536000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now';
  }

}

console.log(formatDuration(0));
