import React from "react";
const CalendarHeader = class extends React.Component {
  state = { date: this.props.date };

  addMonth = by => {
    const { date } = this.props;
    date.setMonth(date.getMonth() + by);
    this.props.onDateChange(date);
    this.setState({ date });
  };

  onPreviousMonthClick = () => this.addMonth(-1);
  onNextMonthClick = () => this.addMonth(1);

  render() {
    const { date } = this.state;
    // prettier-ignore
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const header = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

    return (
      <div className="calendar-header">
        <button onClick={this.onPreviousMonthClick}>&larr;</button>
        {header}
        <button onClick={this.onNextMonthClick}>&rarr;</button>
      </div>
    );
  }
};
export default CalendarHeader;
