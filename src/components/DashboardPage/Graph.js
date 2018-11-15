import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import chart from "../../assets/images/chart.png";

export default class Graph extends Component {
  getSum = () => {
    const { bots, active } = this.props;
    let s = 0;
    if (bots) {
      bots.forEach(e => {
        return (s += e[active]);
      });
      return Math.floor(s / bots.length, 2);
    }
  };
  renderSum = () => {
    const sum = this.getSum();
    return `${sum > 0 ? "+" : "-"}${sum}%`;
  };
  render() {
    return (
      <Grid className="graph">
        <Grid.Row >
          <div
            style={
              this.getSum() > 0 ? { color: "#5EA853" } : { color: "#E5407A" }
            }
            className="graph__amount"
          >
            {this.renderSum()}
          </div>
          <Image className="graph__img" src={chart} centered />
        </Grid.Row>
      </Grid>
    );
  }
}
