import React from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../actions/user';

// eslint-disable-next-line react/prefer-stateless-function
class Logout extends React.Component {
  componentDidMount() {
    this.props.logoutAction();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logoutAction: action.logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));
