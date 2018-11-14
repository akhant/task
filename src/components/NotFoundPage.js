import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        Page not found.
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    );
  }
}
