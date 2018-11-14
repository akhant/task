import React, { Component } from "react";
import { connect } from "react-redux";

import Time from "./Time";
import Bots from "./Bots";
import Balance from "./Balance";
import Header from "./Header";
import Graph from "./Graph";
import { loadData } from "../../actions";
export class Dashboard extends Component {
  state = {
    active: "all_time"
  };

  componentDidMount = () => {
    this.props.loadData();
  };

  handleTime = e => {
    this.setState({
      active: e
    });
  };
  render() {
    const { data } = this.props;
    const { active } = this.state;
    return (
      <div>
        <Header />
        <Balance {...data} />
        <Graph />
        <Bots bots={data.bots} active={active} />
        <Time handleTime={this.handleTime} />
      </div>
    );
  }
}

export default connect(
  ({ data }) => ({ data }),
  { loadData }
)(Dashboard);
