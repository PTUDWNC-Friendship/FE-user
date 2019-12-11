/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Button
} from "react-bootstrap";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TutorCard } from "../ui-components/TutorCard/TutorCard";


class TutorList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      isChangeable: false
    };
    this.enableEditProfile = this.enableEditProfile.bind(this);
    this.enableChangePassword = this.enableChangePassword.bind(this);
  }

  onUpdateInfor = e => {
    e.preventDefault();

  }

  enableEditProfile(){
    if (!this.state.isEditable)
    {
      this.setState({isEditable: true});
    }
    else
    {
      this.setState({isEditable: false});
    }
  }

  enableChangePassword(){
    if (!this.state.isChangeable)
    {
      this.setState({isChangeable: true});
    }
    else
    {
      this.setState({isChangeable: false});
    }
  }


  render() {
    const  {userState} = this.props;
    const {user} = userState;
    console.log(user);
    return (
      <div >
        <div style={{height: '113px'}} />

        <div className="unit-5 overlay" style={{backgroundImage: "url('images/tutor-1.jpg')", minHeight: '200px'}} />

        <div className="site-section bg-light">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-12" data-aos="fade">
            <Grid fluid>
              <Row>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>


                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>

                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name={ user!=null?user.firstName:''}
                    userName={user!=null?user.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />
                </Col>

              </Row>

            </Grid>
          </div>
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
export default connect(
  mapStateToProps,
  null
)(TutorList);
