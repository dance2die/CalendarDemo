import React, { Component } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalendarBody";
import "../css/calendar.css";

class Calendar extends Component {
  state = { date: new Date() };

  onDateChange = date => this.setState({ date });

  render() {
    const { date } = this.state;
    return (
      <div className="calendar">
        <CalendarHeader date={date} onDateChange={this.onDateChange} />
        <CalendarDays />
        <CalendarBody date={date} />
      </div>
    );
  }
}

export { Calendar };
