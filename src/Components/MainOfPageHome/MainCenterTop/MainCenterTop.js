import React, { Component } from "react";
import "./MainCenterTop.css";
class MainCenterTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main__center__top">
        <table className="main__center__top__table">
          <thead>
            <tr>
              <th>VN30F2104</th>
              <th>
                Sàn: <br />
                1080.7
              </th>
              <th>
                TC: <br />
                1162.0
              </th>
              <th>
                Trần:
                <br />
                1243.3
              </th>
            </tr>
            <tr>
              <th colSpan={2}>Bước giá</th>
              <th colSpan={2}>Lịch sử khớp lệnh</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
export default MainCenterTop;
