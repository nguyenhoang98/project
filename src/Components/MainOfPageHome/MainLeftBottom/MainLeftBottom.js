import React, { Component } from "react";
import "./MainLeftBottom.css";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import classNames from "classnames";
class MainLeftBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpenTabTradingView } = this.props;
    console.log(isOpenTabTradingView);
    return (
      <div className="main__left__bottom">
        <div
          className={classNames("main__left__bottom__item item-1", {
            showMenuTabTradingView: isOpenTabTradingView === 1,
          })}
        >
          <TradingViewEmbed
            widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
            widgetConfig={{
              colorTheme: "dark",
              width: "100%",
              height: "98%",
            }}
          />
        </div>
        <div
          className="main__left__bottom__item item-2"
          className={classNames("main__left__bottom__item item-2", {
            showMenuTabTradingView: isOpenTabTradingView === 2,
          })}
        >
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
        <div
          className="main__left__bottom__item item-3"
          className={classNames("main__left__bottom__item item-3", {
            showMenuTabTradingView: isOpenTabTradingView === 3,
          })}
        >
          <TradingViewEmbed
            widgetType={widgetType.SYMBOL_INFO}
            widgetConfig={{
              colorTheme: "dark",
              autosize: true,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div
          className="main__left__bottom__item item-4"
          className={classNames("main__left__bottom__item item-4", {
            showMenuTabTradingView: isOpenTabTradingView === 4,
          })}
        >
          <TradingViewEmbed
            widgetType={widgetType.FUNDAMENTAL_DATA}
            widgetConfig={{
              colorTheme: "dark",
              autosize: true,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    );
  }
}
export default MainLeftBottom;
