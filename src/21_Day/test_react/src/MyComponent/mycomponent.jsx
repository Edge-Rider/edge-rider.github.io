import React from "react";
import "./style.scss";

export default class MyComponent extends React.Component {
    render() {
      return (
        <div className="myComponentClass">
          <div className="myComponentClass__first-value">{this.props.first_value}</div>
          <div className="myComponentClass__second-value">{this.props.second_value}</div>
          <div className="myComponentClass__third-value">{this.props.third_value}</div>
        </div>
      );
    }
  }
  