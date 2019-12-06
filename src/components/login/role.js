import React from "react";
import { withRouter } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import $ from "jquery";
import { Button } from "@material-ui/core";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCurrentUser } from '../../actions/user';


class RolePicking extends React.Component {

  doRegisterStudent = (type) => {
    const {stateLogins} = this.props;
    const {user} = stateLogins;
    fetch(`https://uberfortutor-server-user.herokuapp.com/user/${  type}/register`, {
      method: "POST",
      body: JSON.stringify({
      user
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(
        response => response.json(),

        error => console.log("An error occurred.", error)
      )
      .then(json => {
        if (json != null) {
          const { fetchCurrent } = this.props;
          fetchCurrent();
          const {history} = this.props;
          if(json.role==='tutor') {
            history.push('/home-tutor');
          }
          if(json.role==='student') {
            history.push('/home-student');
          }

        } else {
          $("#errorMsgSer").show();
        }
      });
  }




  render() {

    return (
      <div
        className="site-blocks-cover overlay"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
        style={{backgroundImage: "url('images/tutor-1.jpg')"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center text-white" data-aos="fade">
              <Typography component="h1" variant="h5">
                What Are You Applying For?
              </Typography>
              <p/>
              <Button type="button" variant="contained" color="primary" onClick={()=>this.doRegisterStudent('student')}  className="btn btn-outline-warning py-3 px-4" style={{width: '30%'}}><strong>Student</strong></Button>
              <p/>
              <Button type="button" variant="contained" color="secondary" onClick={()=>this.doRegisterStudent('tutor')}  className="btn btn-outline-warning py-3 px-4" style={{width: '30%'}}><strong>Tutor</strong></Button>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
  stateLogins: state.login,
};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCurrent: fetchCurrentUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RolePicking));
