import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import dash_icon from "../assets/images/dash_icon.png";
import megabot_icon from "../assets/images/megabot_icon.png";
import bot_market_icon from "../assets/images/bot_market_icon.png";
import coin_prices_icon from "../assets/images/coin_prices_icon.png";
import profile_icon from "../assets/images/profile_icon.png";

export default class MenuExampleInverted extends Component {
  render() {
    return (
      <Grid className="footer">
        <Grid.Row className="menu" centered>
          <Grid.Column className="menu__item" width={3}>
            <Link to="/">
              <div>
                <Image centered src={dash_icon} />
                <span>Dashboard</span>
              </div>
            </Link>
          </Grid.Column>
          <Grid.Column className="menu__item" width={3}>
            <Link to="/megabot">
              <div>
                <Image centered src={megabot_icon} />
                <span>Megabot</span>
              </div>
            </Link>
          </Grid.Column>
          <Grid.Column className="menu__item" width={3}>
            <Link to="/bot_market">
              <div>
                <Image centered src={bot_market_icon} />
                <span>Bot market</span>
              </div>
            </Link>
          </Grid.Column>
          <Grid.Column className="menu__item" width={3}>
            <Link to="/coin_prices">
              <div>
                <Image centered src={coin_prices_icon} />
                <span>Coin Prices</span>
              </div>
            </Link>
          </Grid.Column>
          <Grid.Column className="menu__item" width={3}>
            <Link to="/profile">
              <div>
                <Image centered src={profile_icon} />
                <span>Profile</span>
              </div>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
