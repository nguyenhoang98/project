import React, { Component } from "react";
import "./MenuChangeTab.css";

class MenuChangeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 1,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }
  handleChangePage(t) {
    this.setState({
      bgColor: t,
    });
    const { onChangePage } = this.props;
    onChangePage(t);
  }
  render() {
    const { bgColor } = this.state;

    return (
      <div className="main__right__menu menu__tab flex">
        <span
          className="menu__tab__link"
          onClick={() => this.handleChangePage(1)}
          style={{
            background: bgColor === 1 ? "#2f3240" : "",
          }}
        >
          Số lệnh
        </span>
        <span
          className="menu__tab__link"
          onClick={() => this.handleChangePage(2)}
          style={{
            background: bgColor === 2 ? "#2f3240" : "",
          }}
        >
          Danh Mục
        </span>
        <span
          className="menu__tab__link"
          onClick={() => this.handleChangePage(3)}
          style={{
            background: bgColor === 3 ? "#2f3240" : "",
          }}
        >
          Tài Sản
        </span>
      </div>
    );
  }
}

export default MenuChangeTab;
