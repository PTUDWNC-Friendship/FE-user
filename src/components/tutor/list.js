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

    const subject = [];
    for (let i = 0; i < 10; i+=1) {
      subject.push(
        <h>Math</h>
      );
    }
    return (
      <div >
        <div style={{height: '113px'}} />

        <div className="unit-5 overlay" style={{backgroundImage: "url('images/tutor-1.jpg')", minHeight: '200px'}} />

        <div className="site-section bg-light">

        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-12" data-aos="fade">
            <Grid fluid>
            <Row style={{marginBottom: '3%'}}>
              <Col md={1} >Filters: </Col>

              <Col md={3} >
                <select className="js-example-basic-single" name='state' style={{minWidth: '200px'}}>
                  <option value="ANY">Any country</option>
                  <option value="VN">Viet Nam</option>
                  <option value="US">USA</option>
                </select>
              </Col>

              <Col md={3}>
                <select className="js-example-basic-single" name='state' style={{minWidth: '200px'}}>
                  <option value="ANY">Any hourly rate</option>
                  <option value="10ph">$10/hr and below</option>
                  <option value="20">$10/hr - $30/hr</option>
                  <option value="20">$30/hr - $60/hr</option>
                  <option value="20">$60/hr and above</option>
                </select>
              </Col>

              <Col md={3}>
                <select className="js-example-basic-single" name='state' style={{minWidth: '200px'}}>
                  <option value="ANY">Any subject</option>
                  <option value="math">Math</option>
                  <option value="phy">Physic</option>
                  <option value="che">Chemistry</option>
                  <option value="his">History</option>
                </select>
              </Col>
            </Row>

              <Row>
                <Col md={4}>
                  <TutorCard
                    avatar='images/person_1.jpg'
                    // eslint-disable-next-line no-nested-ternary
                    name='Tina Galloway'
                    title='Teacher'
                    address='VietNam'
                    price='1000'
                    subjects={ subject }
                    rate='5.0 stars'
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
