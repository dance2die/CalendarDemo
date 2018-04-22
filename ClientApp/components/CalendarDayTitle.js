import React from "react";
import shortid from "shortid";

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
  const dayTitle = days.map(day => (
    <div key={shortid.generate()} className="calendar-day">
      {day}
    </div>
  ));
  return <div>{dayTitle}</div>;
};
export default CalendarDayTitle;
