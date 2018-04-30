import React from "react";
const CalendarHeader = ({ date }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const header = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  return (
    <div className="calendar-header">
      <button>&larr;</button>
      {header}
      <button>&rarr;</button>
    </div>
  );
};
export default CalendarHeader;
