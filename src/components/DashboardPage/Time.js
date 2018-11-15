import React, { Component } from "react";
import { Grid} from "semantic-ui-react";

export default class Time extends Component {
  state = {
    active: "all_time"
  };
  componentDidMount = () => {
    this.setState({
      active: localStorage.STATE || "all_time"
    })
  }
  
  handleClick = e => {
    this.setState(
      {
        active: e.target.name
      },
      () => {
        this.props.handleTime(this.state.active);
      }
    );
  };
  render() {
    const { active } = this.state;

    return (
      <Grid className="time">
        <Grid.Row >
          <Grid.Column width={4}>
            <div className="time__text">Time Range:</div>
          </Grid.Column>
          <Grid.Column width={3}>
            <button
              onClick={this.handleClick}
              name="24h"
              className={
                active === "24h" ? "time__button active" : "time__button"
              }
            >
              24 h
            </button>
          </Grid.Column>
          <Grid.Column width={3}>
            <button
              onClick={this.handleClick}
              name="7d"
              className={
                active === "7d" ? "time__button active" : "time__button"
              }
            >
              7 days
            </button>
          </Grid.Column>
          <Grid.Column width={3}>
            <button
              onClick={this.handleClick}
              name="30d"
              className={
                active === "30d" ? "time__button active" : "time__button"
              }
            >
              30 days
            </button>
          </Grid.Column>
          <Grid.Column width={3}>
            <button
              onClick={this.handleClick}
              name="all_time"
              className={
                active === "all_time" ? "time__button active" : "time__button"
              }
            >
              All time
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
