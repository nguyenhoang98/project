import React, { Component } from "react";
import { connect } from "react-redux";
import MainCenterBottom from "../../Components/MainOfPageHome/MainCenterBottom/MainCenterBottom";
import TableCodeItem from "../../Components/MainOfPageHome/MainCenterBottom/TableCodeItem/TableCodeItem";
import { fetch_api_table_code } from "../../Redux/Actions/TableCode";
class TableCodeContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchApiTableCode } = this.props;
    fetchApiTableCode(
      "https://finfo-api.vndirect.com.vn/v4/derivative_prices?q=type:FU"
    );
  }
  render() {
    const { data } = this.props;
    return (
      <MainCenterBottom>
        {data.map((value, index) => {
          return <TableCodeItem data={value} key={index} />;
        })}
      </MainCenterBottom>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.TableCode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiTableCode: (url) => {
      dispatch(fetch_api_table_code(url));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableCodeContainer);
