import React, { Component } from 'react'
import { Grid, Icon, Image } from "semantic-ui-react";
import reload from "../../assets/images/reload.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row className="nav__header">
            <Grid.Column
              width={2}
              textAlign="center"
              size="massive"
              className="nav__header_menu-button"
            >
              <Icon name="bars" />
            </Grid.Column>
            <Grid.Column
              width={12}
              textAlign="center"
              className="nav__header-h1"
            >
              <h1>Dashboard</h1>
            </Grid.Column>
            <Grid.Column width={2} className="nav__header_reload-button">
              <Image src={reload} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
