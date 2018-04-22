import React, { Component } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDayTitle from "./CalendarDayTitle";
import CalendarBody from "./CalendarBody";

class Calendar extends Component {
  render() {
    const date = new Date();
    return (
      <div>
        <CalendarHeader date={date} />
        <CalendarDayTitle date={date} />
        <CalendarBody date={date} />
      </div>
    );
  }
}

export { Calendar };
