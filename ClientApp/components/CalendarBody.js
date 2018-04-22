import React from "react";
import shortid from "shortid";
import CalendarDates from "calendar-dates";
const calendarDates = new CalendarDates();

const CalendarBody = ({ date }) => {
  const dateMatrix = calendarDates.getDateMatrix(date);
  const body = dateMatrix.map(dates =>
    dates.map(date => (
      <div className="calendar-date" key={shortid.generate()}>
        {date}
      </div>
    ))
  );
  return <div className="calendar-body">{body}</div>;
};

export default CalendarBody;
