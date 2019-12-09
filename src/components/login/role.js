import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeUser } from '../../actions/user';

class RolePicking extends React.Component {
  registerRole = role => {
    const { userState } = this.props;
    fetch(
      `https://uberfortutor-server-user.herokuapp.com/user/${role}/register`,
      {
        method: 'POST',
        body: JSON.stringify({
          _id: userState.user._id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    )
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        if (json != null) {
          const { history, authorizeUserAction } = this.props;
          authorizeUserAction();
          if (json.role === 'tutor') {
            history.push('/home-tutor');
          }
          if (json.role === 'student') {
            history.push('/home-student');
          }
        } else {
          $('#errorMsgSer').show();
        }
      });
  };

  render() {
    return (
      <div
        className="site-blocks-cover overlay"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url('images/tutor-1.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center text-white" data-aos="fade">
              <Typography component="h1" variant="h5">
                What Are You Applying For?
              </Typography>
              <Button
                type="button"
                onClick={() => this.registerRole('student')}
                className="btn btn-warning py-3 px-4 text-white"
                style={{ margin: '2.5%', width: '30%' }}
              >
                <strong>STUDENT</strong>
              </Button>
              <Button
                type="button"
                onClick={() => this.registerRole('tutor')}
                className="btn btn-success py-3 px-4 text-white"
                style={{ margin: '2,5%', width: '30%' }}
              >
                <strong>TUTOR</strong>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
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
      authorizeUserAction: authorizeUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RolePicking));
