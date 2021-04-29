import React from "react";
import MainRightTopTab1 from "../../Components/MainOfPageHome/MainRightTop/MainRightTopTab1/MainRightTopTab1";
import MainRightTopTab1Item from "../../Components/MainOfPageHome/MainRightTop/MainRightTopTab1Item/MainRightTopTab1Item";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import useSWR from "swr";
MainRightTopTab1Container.propTypes = {};
const fetcher = (x) => {
  return fetch(x).then((res) => res.json());
};
function MainRightTopTab1Container(props) {
  const {
    data,
    error,
  } = useSWR(
    `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${
      jwt_decode(localStorage.getItem("vnd")).username
    }`,
    fetcher,
    { refreshInterval: 1000 }
  );
  if (error)
    return (
      <div
        style={{
          textAlign: "center ",
          padding: 20,
        }}
      >
        failed to load
      </div>
    );
  if (!data)
    return (
      <div
        style={{
          padding: 20,
          textAlign: "Center ",
        }}
      >
        <span
          style={{
            padding: 20,
            color: "#fff",
          }}
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </span>
      </div>
    );
  const { isOpenTab } = props;
  return (
    <MainRightTopTab1 isOpenTab={isOpenTab}>
      {data.map((value, index) => {
        return <MainRightTopTab1Item data={value} key={index} />;
      })}
    </MainRightTopTab1>
  );
}

export default MainRightTopTab1Container;
