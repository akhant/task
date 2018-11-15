import React, { Component } from "react";
import orange_bot from "../../assets/images/orange_bot.png";
import red_bot from "../../assets/images/red_bot.png";
import blue_bot from "../../assets/images/blue_bot.png";
import white_bot from "../../assets/images/white_bot.png";
import yellow_bot from "../../assets/images/yellow_bot.png";
import green_bot from "../../assets/images/green_bot.png";
import { Grid, Image } from "semantic-ui-react";

const botImage = {
  orange_bot,
  red_bot,
  blue_bot,
  white_bot,
  yellow_bot,
  green_bot
};

export default class Bot extends Component {
  renderPercent = (bot, active) => {
    const num = Number(bot[active]);
    if (bot.name === "white_bot") return <span className="bot_percent">PLACE BOT HERE</span>;
    return (
      <span
      className="bot_percent"
        style={num > 0 ? { color: "#5EA853" } : { color: "#E5407A" }}
      >{`${num}%`}</span>
    );
  };
  render() {
    const { bot, active } = this.props;
    return (
      <Grid.Column
        className="bot"
        /* stretched */ verticalAlign="middle"
        width={5}
      >
        <div className="bot_inside">
          <Image fluid centered src={botImage[bot.name]} />
          {this.renderPercent(bot, active)}
        </div>
      </Grid.Column>
    );
  }
}
