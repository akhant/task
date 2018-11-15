import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import H from "../../assets/images/H.png";

export default class Balance extends Component {
  render() {
    const {
      trading_capital,
      trading_capital_currency,
      balance,
      on_hold
    } = this.props;
    return (
      <Grid className="balance">
        <Grid.Row>
          <Grid.Column floated="left" width={8} className="balance__capital">
            <div>TRADING CAPITAL</div>
            <div>
              <span className="white capital">{`${trading_capital} ${trading_capital_currency}`}</span>
            </div>
          </Grid.Column>
          <Grid.Column width={8} className="balance__hold">
            <div className="balance__hold_text">
              <div>BALANCE: </div>
              <div>ON HOLD: </div>
            </div>
            <div className="balance__hold_num">
              <div className="white">{balance}</div>
              <div className="white">{on_hold}</div>
            </div>
            <div className="balance__hold_icon">
              <Image size="tiny" className="balance_icon" src={H} />
              <Image size="tiny" className="balance_icon" src={H} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
