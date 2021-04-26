import React, { Component } from "react";
import "./Wrap.css";
import Nav from "../Nav/Nav";
import ModelTopPlayer from "../ModelTopPlayer/ModelTopPlayer";
import { Switch, Route, withRouter } from "react-router-dom";
import routers from "../../routers";
class Wrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModelTopPlayer: false,
    };
    this.showModelTopPlayer = this.showModelTopPlayer.bind(this);
    this.closeTopModelPlayer = this.closeTopModelPlayer.bind(this);
  }
  showModelTopPlayer() {
    this.setState({
      isOpenModelTopPlayer: true,
    });
  }
  closeTopModelPlayer() {
    this.setState({
      isOpenModelTopPlayer: false,
    });
  }
  render() {
    const { isOpenModelTopPlayer } = this.state;
    const { location } = this.props;
    const { pathname } = location;
    console.log(pathname);
    return (
      <div className="wrap">
        {pathname !== "/login-page" && (
          <Nav handleShowModelTopPlayer={this.showModelTopPlayer} />
        )}
        {isOpenModelTopPlayer && (
          <ModelTopPlayer
            handleCloseModelTopPlayer={this.closeTopModelPlayer}
            isOpenModelTopPlayer={isOpenModelTopPlayer}
          />
        )}
        <Switch>
          {routers.map((value, index) => {
            return (
              <Route
                path={value.path}
                component={value.component}
                exact={value.exact}
                key={index}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}
export default withRouter(Wrap);
