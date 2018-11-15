import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Bot from './Bot'
export default class Bots extends Component {
  render() {
    const { bots, active } = this.props;
    return (
      <Grid className="bots">
        <Grid.Row centered>
          {bots && bots.map(bot => (
            <Bot key={bot.name} bot={bot} active={active} />
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}
