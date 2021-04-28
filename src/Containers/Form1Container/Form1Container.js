import React, { Component } from "react";
import Form1 from "../../Components/MainOfPageHome/MainRightBottom/Form1/Form1";
import { connect } from "react-redux";
import { post_api_command_number_table } from "../../Redux/Actions/CommandNumberTable";
class Form1Container extends Component {
  constructor(props) {
    super(props);
    this.postApiCommandNumberTable = this.postApiCommandNumberTable.bind(this);
  }
  postApiCommandNumberTable(url, data) {
    console.log(url);
    console.log(data);
    const { postApiCommandNumberTable } = this.props;
    postApiCommandNumberTable(url, data);
  }
  render() {
    const { isOpenTabForm } = this.props;
    return (
      <>
        <Form1
          isOpenTabForm={isOpenTabForm}
          postApiCommandNumberTable={this.postApiCommandNumberTable}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    postApiCommandNumberTable: (url, data) => {
      dispatch(post_api_command_number_table(url, data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form1Container);
