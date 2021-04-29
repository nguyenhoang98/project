import React from "react";
import MainRightTopTab2 from "../../Components/MainOfPageHome/MainRightTop/MainRightTopTab2/MainRightTopTab2";
import PropTypes from "prop-types";
import useSWR from "swr";
import jwt_decode from "jwt-decode";
import MainRightTopTab2Item from "../../Components/MainOfPageHome/MainRightTop/MainRightTopTab2Item/MainRightTopTab2Item";
MainRightTopTab2Container.propTypes = {};
const fetcher = (x) => fetch(x).then((res) => res.json());
function MainRightTopTab2Container(props) {
  const { data, error } = useSWR(
    `https://dertrial-api.vndirect.com.vn/demotrade/portfolio?username=${
      jwt_decode(localStorage.getItem("vnd")).username
    }&position=open`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(jwt_decode(localStorage.getItem("vnd")));
  console.log(data);
  const { isOpenTab } = props;
  return (
    <MainRightTopTab2 isOpenTab={isOpenTab}>
      {data.map((value, index) => {
        return <MainRightTopTab2Item data={value} key={index} />;
      })}
    </MainRightTopTab2>
  );
}

export default MainRightTopTab2Container;
