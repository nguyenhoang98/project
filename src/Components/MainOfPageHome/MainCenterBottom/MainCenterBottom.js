import React, { Component } from "react";
import "./MainCenterBottom.css";

class MainCenterBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main__center__bottom">
        <div
          style={{
            height: "100%",
          }}
        >
          <table className="main__center__bottom__table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Giá</th>
                <th>
                  <span>
                    <i className="fa fa-caret-left" aria-hidden="true"></i>
                  </span>
                  +/-
                  <span>
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </span>
                </th>
                <th>Lệch</th>
                <th>Tổng KL</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default MainCenterBottom;
