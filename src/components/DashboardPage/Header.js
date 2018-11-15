import React, { Component } from 'react'
import { Grid, Icon, Image } from "semantic-ui-react";
import reload from "../../assets/images/reload.png";

export default class Header extends Component {
  render() {
    return (
      
        <Grid className="header">
          <Grid.Row verticalAlign="middle" >
            <Grid.Column
              width={2}
              textAlign="center"
              size="huge"
              className="header_menu-button"
            >
              <Icon name="bars" />
            </Grid.Column>
            <Grid.Column
              width={12}
              textAlign="center"
              className="header-h1"
            >
              <h1>Dashboard</h1>
            </Grid.Column>
            <Grid.Column floated="right" width={2} className="header_reload-button">
              <Image  src={reload} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      
    )
  }
}
