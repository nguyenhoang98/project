import React, { Component } from "react";
import MenuRightTop from "../../Components/MainOfPageHome/MainRightTop/MainRightTop";
import { connect } from "react-redux";
import { fetch_api_command_number_table } from "../../Redux/Actions/CommandNumberTable";
import MainRightTopItem from "../../Components/MainOfPageHome/MainRightTop/MainRightTopItem/MainRightTopItem";
import jwt_decode from "jwt-decode";
class MainRightTopContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var token = localStorage.getItem("vnd");
    var decoded = jwt_decode(token);
    console.log(decoded.customerName);
    const { fetchapiCommanNumberTable } = this.props;
    fetchapiCommanNumberTable(
      `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${decoded.username}`
    );
  }
  render() {
    const { isOpenTab, CommandNumberTableData } = this.props;
    console.log(CommandNumberTableData);
    return (
      <MenuRightTop isOpenTab={isOpenTab}>
        {CommandNumberTableData.map((value, index) => {
          return <MainRightTopItem data={value} key={index} />;
        })}
      </MenuRightTop>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    CommandNumberTableData: state.CommandNumberTable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchapiCommanNumberTable: (url) => {
      dispatch(fetch_api_command_number_table(url));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRightTopContainer);
