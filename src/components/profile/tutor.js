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
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

import { FormInputs } from "../ui-components/FormInputs/FormInputs";
import { UserCard } from "../ui-components/UserCard/UserCard";

import { CustomCard } from "../ui-components/Card/Card";

class TutorProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      isChangeable: false
    };
    this.enableEditProfile = this.enableEditProfile.bind(this);
    this.enableChangePassword = this.enableChangePassword.bind(this);
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
    return (
      <div
        className="site-blocks-cover overlay"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
        style={{backgroundImage: "url('images/tutor-1.jpg')"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12" data-aos="fade">
              <Grid fluid style={{marginTop: '15%'}}>
                <Row>
                  <Col md={4}>
                    <UserCard
                      avatar='images/person_1.jpg'
                      name="Tina Galloway"
                      userName="username123"
                      socials={
                        <div>
                          *****
                        </div>
                      }
                    />

                    <CustomCard
                      content={
                        <form>
                        {this.state.isChangeable?
                          (<h4>
                            Password

                            <Button
                              bsStyle="outline-info"
                              className="pull-right"
                              onClick={this.enableChangePassword}
                              data-toggle="collapse" data-target="#password"
                              style={{marginLeft: '1%'}}>
                              Cancel
                            </Button>

                            <Button
                              bsStyle="info"
                              className="pull-right"
                              type="submit">
                              Save
                            </Button>
                          </h4>
                          ) : (
                            <h4>
                              Password
                              <Button
                                bsStyle="info"
                                className="pull-right"
                                data-toggle="collapse" data-target="#password"
                                onClick={this.enableChangePassword}>
                                Change
                              </Button>
                            </h4>
                          )}

                          <div id="password" className="collapse">
                            <FormInputs
                              ncols={["col-md-12"]}
                              properties={[
                                {
                                  label: "New password",
                                  type: "password",
                                  bsClass: "form-control",
                                  placeholder: "Enter your password here",
                                  disabled: !this.state.isChangeable
                                }
                              ]}
                            />

                            <FormInputs
                              ncols={["col-md-12"]}
                              properties={[
                                {
                                  label: "Confirm password",
                                  type: "password",
                                  bsClass: "form-control",
                                  placeholder: "Enter your password here",
                                  disabled: !this.state.isChangeable
                                }
                              ]}
                            />
                          </div>
                        </form>
                      }
                    />
                  </Col>


                  <Col md={8}>
                    <CustomCard
                      content={
                        <form>
                        {this.state.isEditable?
                          (<h4>
                            Personal Information

                            <Button
                              bsStyle="outline-info"
                              className="pull-right"
                              onClick={this.enableEditProfile}
                              style={{marginLeft: '1%'}}>
                              Cancel
                            </Button>

                            <Button
                              bsStyle="info"
                              className="pull-right"
                              type="submit">
                              Save
                            </Button>
                          </h4>
                          ) : (
                            <h4>
                              Personal Information
                              <Button
                                bsStyle="info"
                                className="pull-right"
                                onClick={this.enableEditProfile}>
                                Edit
                              </Button>
                            </h4>
                          )}

                          <FormInputs
                            ncols={["col-md-8", "col-md-1", "col-md-1"]}
                            properties={[
                              {
                                label: "Title",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Your title",
                                maxLength: '128',
                                disabled: !this.state.isEditable
                              },
                              {
                                label: "Male",
                                type: "checkbox",
                                bsClass: "form-check",
                                style: {margin: '10%'},
                                disabled: !this.state.isEditable
                              },
                              {
                                label: "Female",
                                type: "checkbox",
                                bsClass: "form-check",
                                style: {margin: '10%'},
                                disabled: !this.state.isEditable
                              }
                            ]}
                          />
                          <FormInputs
                            ncols={["col-md-6", "col-md-6"]}
                            properties={[
                              {
                                label: "First name",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "First name",
                                maxLength: '128',
                                disabled: !this.state.isEditable
                              },
                              {
                                label: "Last name",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Last name",
                                maxLength: '128',
                                disabled: !this.state.isEditable
                              }
                            ]}
                          />

                          <FormInputs
                            ncols={["col-md-9", "col-md-3"]}
                            properties={[
                              {
                                label: "Address",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Home Address",
                                maxLength: '255',
                                disabled: !this.state.isEditable
                              },
                              {
                                label: "PHONE NUMBER",
                                type: "numeric",
                                bsClass: "form-control",
                                placeholder: "0123456789",
                                maxLength: '11',
                                disabled: !this.state.isEditable
                              }
                            ]}
                          />

                          <Row>
                            <Col md={12}>
                              <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>About Me</ControlLabel>
                                <FormControl
                                  rows="30"
                                  componentClass="textarea"
                                  bsClass="form-control"
                                  maxLength='1000'
                                  style={{maxHeight: '250px'}}
                                  placeholder="Here can be your description"
                                  className="noresize"
                                  disabled= {!this.state.isEditable}
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <div className="clearfix" />
                        </form>
                      }
                    />
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default TutorProfile;
