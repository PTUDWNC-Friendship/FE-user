/* eslint-disable no-return-assign */
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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import { FormInputs } from "../ui-components/FormInputs/FormInputs";
import { UserCard } from "../ui-components/UserCard/UserCard";
import { CustomCard } from "../ui-components/Card/Card";
import { login, authorizeUser, fetchAllTutors, updateUser, updateTutor } from '../../actions/user';
import {storage}  from "../../Firebase/index";

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

  componentDidMount() {
    const {  getListTutors } = this.props;
    getListTutors();
    }

    onUpdateInfor = e => {
      $('#idLoading').show();
      $('#successMsg').hide();
      const { userState } = this.props;
      e.preventDefault();
      let user = {
        gender: e.target.gender.value===true?'male':'female',
        firstName: e.target.firstName.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        bio: e.target.bio.value
      };
      let imgAvatar;
      imgAvatar = userState.user.imageURL;
      const image = this.fileUpload.files[0];
      console.log(user);
      if(this.fileUpload.files.length>0) {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            if(progress===100) {
              $('#idLoading').hide();
              $('#successMsg').show();
            }
          },
          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                imgAvatar = url;

              });
          }
        );
      }

    }



  displayImg= e => {

    e.preventDefault();
    const image = e.target.files[0];
    // eslint-disable-next-line prefer-const
    let reader = new FileReader();
    reader.onload = function (ev) {
        $('#idImg')
            .attr('src', ev.target.result);
    };
    reader.readAsDataURL(image);
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
    const {user,allTutors} = userState;
    let currentTutor = null;

    if(allTutors.length>0) {
      currentTutor =allTutors.find(el=>el._id===user._id);
    }


    let fullName = '';
    if(currentTutor!==null) {
      fullName = currentTutor.firstName + currentTutor.lastName;
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
              <Row>
                <Col md={4}>
                  <UserCard
                    disabled = {!this.state.isEditable}
                    onClick={()=>{$('#inputImg').click();}}
                    avatar={currentTutor!=null?currentTutor.imageURL:''}
                    // eslint-disable-next-line no-nested-ternary
                    name={fullName}
                    userName={currentTutor!=null?currentTutor.username:''}
                    socials={
                      <div>
                        *****
                      </div>
                    }
                  />

                  <CustomCard
                    content={
                      <form >


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
                      <form onSubmit={this.onUpdateInfor}>

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
                  <input id="inputImg" style={{display: 'none'}} onChange={this.displayImg} ref={ref => (this.fileUpload = ref)} type="file" accept="image/*" name="imageURL" />
                        <FormInputs
                          ncols={["col-md-8", "col-md-2", "col-md-2"]}
                          properties={[
                            {
                              label: "Title",
                              type: "text",
                              name: "title",
                              bsClass: "form-control",
                              placeholder: currentTutor!==null?currentTutor.title:'',
                              maxLength: '128',
                              disabled: !this.state.isEditable
                            },
                            {
                              label: "Gender/Male",
                              name: 'gender',
                              type: "checkbox",
                              bsClass: "form-check",
                              checked:  currentTutor !== null && currentTutor.gender === 'male',
                              style: {marginTop: '10%'},
                              disabled: !this.state.isEditable
                            },
                            {
                              label: "Gender/Female",
                              name: 'gender',
                              type: "checkbox",
                              bsClass: "form-check",
                              checked:  currentTutor !== null && currentTutor.gender === 'female',
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
                              name: "firstName",
                              bsClass: "form-control",
                              value: currentTutor!=null?currentTutor.firstName:'',
                              disabled: !this.state.isEditable
                            },
                            {
                              label: "Last name",
                              type: "text",
                              name: "lastName",
                              bsClass: "form-control",
                              placeholder: currentTutor!=null?currentTutor.lastName:'',
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
                              name: "address",
                              bsClass: "form-control",
                              placeholder: currentTutor!=null?currentTutor.address:'',
                              maxLength: '255',
                              disabled: !this.state.isEditable
                            },
                            {
                              label: "PHONE NUMBER",
                              type: "numeric",
                              name: "phone",
                              bsClass: "form-control",
                              placeholder: user!=null?user.phone:'',
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
                                rows="10"
                                name="bio"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder={currentTutor!==null?currentTutor.bio:''}
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
              <div className="d-flex justify-content-center">
          <div
              id="idLoading"
              style={{ display: 'none' }}
              className="spinner-border text-success"
            />
          </div>
          <div className="d-flex justify-content-center">
          <div
              id="successMsg"
              style={{ display: 'none', color: 'green', textAlign: 'center' }}
            >
              Chỉnh sửa thành công!
            </div>
          </div>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginAction: login,
      authorizeUserAction: authorizeUser,
      getListTutors: fetchAllTutors,
      onUpdateUser: updateUser,
      onUpdateTutor: updateTutor
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorProfile);
