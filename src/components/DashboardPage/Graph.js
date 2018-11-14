import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import chart from "../../assets/images/chart.png";

export default class Graph extends Component {
  render() {
    return (
        <Grid>
        <Grid.Row className="graph">
          <Image src={chart} fluid />
        </Grid.Row>
      </Grid>
    )
  }
}
