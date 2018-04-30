import React, { Component } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalendarBody";
import "../css/calendar.css";

class Calendar extends Component {
  render() {
    const date = new Date();
    return (
      <div className="calendar">
        <CalendarHeader date={date} />
        <CalendarDays />
        <CalendarBody date={date} />
      </div>
    );
  }
}

export { Calendar };
