import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import configureStore from "../store";
import Dashboard from "./DashboardPage/Dashboard";
import NotFoundPage from "./NotFoundPage";
import Footer from "./Footer";
import Megabot from "./MegabotPage/Megabot";
import BotMarket from "./BotMarketPage/BotMarket";
import CoinPrices from "./CoinPricesPage/CoinPrices";
import Profile from "./ProfilePage/Profile";
import "semantic-ui-css/semantic.min.css";
import "../assets/styles/styles.sass";


const history = createBrowserHistory();

const store = configureStore();



const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        {/*  <Menu /> */}
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/megabot" exact component={Megabot} />
          <Route path="/bot_market" exact component={BotMarket} />
          <Route path="/coin_prices" exact component={CoinPrices} />
          <Route path="/profile" exact component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
