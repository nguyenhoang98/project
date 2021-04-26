import React, { Component } from "react";
import "./MainLeftTop.css";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
class MainLeftTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main__left__top">
        <TradingViewEmbed
          widgetType={widgetType.ADVANCED_CHART}
          widgetConfig={{
            colorTheme: "dark",
            symbol: "BITMEX:XBTUSD",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }
}
export default MainLeftTop;
