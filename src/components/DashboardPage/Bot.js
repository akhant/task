import React, { Component } from "react";
import orange from "../../assets/images/orange.png";
import { Grid, Image } from "semantic-ui-react";

export default class Bot extends Component {
  renderPercent = (bot, active) => {
    const num = Number(bot[active]);
    return (
      <span
        style={num > 0 ? { color: "green" } : { color: "red" }}
      >{`${num}%`}</span>
    );
  };
  render() {
    const { bot, active } = this.props;
    return (
      <Grid.Column textAlign="center" width={5}>
        <Image centered src={orange} />
        {this.renderPercent(bot, active)}
      </Grid.Column>
    );
  }
}
