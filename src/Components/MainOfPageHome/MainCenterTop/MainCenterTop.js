import React, { useState, useEffect } from "react";
import "./MainCenterTop.css";
import MainCenterTopTab1 from "./MainCenterTopTab1/MainCenterTopTab1";
import MainCenterTopTab2 from "./MainCenterTopTab2/MainCenterTopTab2";
import { io } from "socket.io-client";
import PropTypes from "prop-types";

MainCenterTop.propTypes = {};
function MainCenterTop(props) {
  const [isOpenTab, setIsOpenTab] = useState(1);
  function handleChangeTab(i) {
    setIsOpenTab(i);
  }

  //

  return (
    <div className="main__center__top">
      <table className="main__center__top__table">
        <thead>
          <tr>
            <th>VN30F2104</th>
            <th>
              Sàn: <br />
              <span
                style={{
                  color: "#18c451",
                }}
              >
                1080.7
              </span>
            </th>
            <th>
              TC: <br />
              <span
                style={{
                  color: "#ffd900",
                }}
              >
                1162.0
              </span>
            </th>
            <th>
              Trần:
              <br />
              <span className="text-purple">1243.3</span>
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              onClick={() => handleChangeTab(1)}
              style={{
                cursor: "pointer",
                color: isOpenTab === 1 ? "#f7941d" : "",
              }}
            >
              Bước giá
            </th>
            <th
              colSpan={2}
              onClick={() => handleChangeTab(2)}
              style={{
                cursor: "pointer",
                color: isOpenTab === 2 ? "#f7941d" : "",
              }}
            >
              Lịch sử khớp lệnh
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {isOpenTab === 1 ? (
        <MainCenterTopTab1 />
      ) : isOpenTab === 2 ? (
        <MainCenterTopTab2 />
      ) : null}
    </div>
  );
}

export default MainCenterTop;
