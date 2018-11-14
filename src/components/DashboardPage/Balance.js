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
      <Grid>
        <Grid.Row className="balance">
          <Grid.Column width={8} className="balance_capital">
            <div>TRADING CAPITAL</div>
            <div>
            <span className="white capital">{`${trading_capital} ${trading_capital_currency}`}</span>
            </div>
          </Grid.Column>
          <Grid.Column width={8} className="balance__amount">
            <div>
              <span>BALANCE: <span className="white">{balance}</span></span> <Image className="balance_icon" src={H} />
            </div>
            <div>
              <span>ON HOLD: <span className="white">{on_hold}</span></span> <Image className="balance_icon" src={H} />{" "}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
