import React from "react";
const CalendarDayTitle = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayTitle = days.map(day => <div className="calendar-day">{day}</div>);
  return <div>{dayTitle}</div>;
};
export default CalendarDayTitle;
