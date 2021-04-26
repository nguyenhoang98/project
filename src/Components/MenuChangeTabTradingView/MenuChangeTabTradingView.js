import React, { Component } from "react";

import "./MenuChangeTabTradingView.css";
class MenuChangeTabTradingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 1,
    };
    this.handleChangeTabTradingView = this.handleChangeTabTradingView.bind(
      this
    );
  }
  handleChangeTabTradingView(t) {
    this.setState({
      bgColor: t,
    });
    const { handleChangeTabTradingView } = this.props;
    handleChangeTabTradingView(t);
  }

  render() {
    const { bgColor } = this.state;
    return (
      <div className="menuchangetabtradingview flex">
        <div className="menuchangetabtradingview__left">
          Bản quyền thuộc về VNDIRECT © 2021. v2.2.2
        </div>
        <div className="menuchangetabtradingview__right flex">
          <span
            className="menuchangetabtradingview__right__link"
            onClick={() => this.handleChangeTabTradingView(1)}
            style={{
              background: bgColor === 1 ? "#2f3240" : "",
            }}
          >
            VN30 INTRADAY
          </span>
          <span
            className="menuchangetabtradingview__right__link"
            onClick={() => this.handleChangeTabTradingView(2)}
            style={{
              background: bgColor === 2 ? "#2f3240" : "",
            }}
          >
            VN30{" "}
          </span>
          <span
            className="menuchangetabtradingview__right__link"
            onClick={() => this.handleChangeTabTradingView(3)}
            style={{
              background: bgColor === 3 ? "#2f3240" : "",
            }}
          >
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
          </span>
          <span
            className="menuchangetabtradingview__right__link"
            onClick={() => this.handleChangeTabTradingView(4)}
            style={{
              background: bgColor === 4 ? "#2f3240" : "",
            }}
          >
            <i class="fa fa-pie-chart" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    );
  }
}
export default MenuChangeTabTradingView;
