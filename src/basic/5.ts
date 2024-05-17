enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  } else {
    return false;
  }
};

console.log(
  "5.ts:",
  "Friday:",
  isWeekend(DayOfWeek.Friday),
  "Sunday:",
  isWeekend(DayOfWeek.Sunday)
);
