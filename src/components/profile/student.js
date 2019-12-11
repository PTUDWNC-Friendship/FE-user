import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery';
import { FormInputs } from '../ui-components/FormInputs/FormInputs';
import { UserCard } from '../ui-components/UserCard/UserCard';
import { CustomCard } from '../ui-components/Card/Card';
import { login, authorizeUser, fetchAllTutors, updateUser, updateTutor } from '../../actions/user';
import {storage}  from "../../Firebase/index";

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      isChangeable: false
    };
    this.enableEditProfile = this.enableEditProfile.bind(this);
    this.enableChangePassword = this.enableChangePassword.bind(this);
    this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handChange = this.handleChange.bind(this);

    this.formPassword = React.createRef();
    this.formGeneral = React.createRef();
  }

  onUpdateInfor = e => {
    e.preventDefault();
  };

  
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

  enableEditProfile() {
    if (!this.state.isEditable) {
      this.setState({ isEditable: true });
    } else {
      this.setState({ isEditable: false });
    }
  }

  enableChangePassword() {
    if (!this.state.isChangeable) {
      this.setState({ isChangeable: true });
    } else {
      this.setState({ isChangeable: false });
    }
  }

  handleChange(e) {
    
  }


  handleSubmitPassword(e) {
    e.preventDefault();
    const { updateUserAction, userState, authorizeUserAction } = this.props;
    const { elements } = this.formPassword.current;
    if (elements.password.value === elements.confirmPassword.value) {
      Object.keys(userState.user).forEach(key => {
        if (elements[key]) {
          userState.user[key] = elements[key].value;
        }
        updateUserAction(userState.user);
      });
    }


  }

  handleSubmit(e) {
    $('#idLoading').show();
    $('#successMsg').hide();
    e.preventDefault();
    const { updateUserAction, userState, authorizeUserAction } = this.props;

    let user = {
      _id: e.target.id.value,
      password: "",
      firstName: e.target.firstName.value.trim()!==""?e.target.firstName.value:e.target.firstName.placeholder,
      lastName: e.target.lastName.value.trim()!==""?e.target.lastName.value:e.target.lastName.placeholder,
      address: e.target.address.value.trim()!==""?e.target.address.value:e.target.address.placeholder,
      phone: e.target.phone.value.trim()!==""?e.target.phone.value:e.target.phone.placeholder,
      bio: e.target.bio.value.trim()!==""?e.target.bio.value:e.target.bio.placeholder,
      imageURL: userState.user.imageURL
    };
    let imgAvatar;
    imgAvatar = userState.user.imageURL;
    const image = this.fileUpload.files[0];
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
              user.imageURL =url;
              Promise.resolve(
                updateUserAction(user)
              ).then(()=>{
                authorizeUserAction();
                $('#idLoading').hide();
                $('#successMsg').show();
        
      
      
      
              });
            });
        }
      );
    } else {
      
      Promise.resolve(
        updateUserAction(user)
      ).then(()=>{
        authorizeUserAction();
        $('#idLoading').hide();
        $('#successMsg').show();
      });
    }
  }

  render() {
    const { userState } = this.props;
    const { user } = userState;

    return (
      <div>
        <div style={{ height: '113px' }} />

        <div
          className="unit-5 overlay"
          style={{
            backgroundImage: `url('${user !== null ? user.imageURL : 'images/tutor-1.jpg'}')`,
            minHeight: '200px'
          }}
        />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12" data-aos="fade">
                <Grid fluid>
                  <Row>
                    <Col md={6} />
                    <Col md={6}>
                      <Fade
                        in={userState.isFetching}
                        unmountOnExit
                      >
                        <CircularProgress />
                      </Fade>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <UserCard
                       disabled = {!this.state.isEditable}
                       onClick={()=>{$('#inputImg').click();}}
                        avatar={user!==null?user.imageURL:''}
                        name={
                          user !== null
                            ? `${user.firstName} ${user.lastName}`
                            : ''
                        }
                        userName={user !== null ? user.username : ''}
                        socials={<div>Student</div>}
                      />

                      <CustomCard
                        content={
                          <form
                            onSubmit={this.handleSubmitPassword}
                            ref={this.formPassword}
                          >
                            {this.state.isChangeable ? (
                              <h4>
                                Password
                                <Button
                                  bsStyle="outline-info"
                                  className="pull-right"
                                  onClick={this.enableChangePassword}
                                  data-toggle="collapse"
                                  data-target="#password"
                                  style={{ marginLeft: '1%' }}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  bsStyle="info"
                                  className="pull-right"
                                  type="submit"
                                >
                                  Save
                                </Button>
                              </h4>
                            ) : (
                              <h4>
                                Password
                                <Button
                                  bsStyle="info"
                                  className="pull-right"
                                  data-toggle="collapse"
                                  data-target="#password"
                                  onClick={this.enableChangePassword}
                                >
                                  Change
                                </Button>
                              </h4>
                            )}

                            <div id="password" className="collapse">
                              <FormInputs
                                ncols={['col-md-12']}
                                properties={[
                                  {
                                    label: 'New password',
                                    type: 'password',
                                    bsClass: 'form-control',
                                    name: 'password',
                                    placeholder: 'Enter your password here',
                                    disabled: !this.state.isChangeable
                                  }
                                ]}
                              />

                              <FormInputs
                                ncols={['col-md-12']}
                                properties={[
                                  {
                                    label: 'Confirm password',
                                    type: 'password',
                                    bsClass: 'form-control',
                                    name: 'confirmPassword',
                                    placeholder: 'Enter your password here',
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
                      <CustomCard
                        content={
                          <form
                            onSubmit={this.handleSubmit}
                            ref={this.formGeneral}
                          >
                            {this.state.isEditable ? (
                              <h4>
                                Personal Information
                                <Button
                                  bsStyle="outline-info"
                                  className="pull-right"
                                  onClick={this.enableEditProfile}
                                  style={{ marginLeft: '1%' }}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  bsStyle="info"
                                  className="pull-right"
                                  type="submit"
                                >
                                  Save
                                </Button>
                              </h4>
                            ) : (
                              <h4>
                                Personal Information
                                <Button
                                  bsStyle="info"
                                  className="pull-right"
                                  onClick={this.enableEditProfile}
                                >
                                  Edit
                                </Button>
                              </h4>
                            )}

                            <FormInputs
                              ncols={[
                                'col-md-5',
                                'col-md-5',
                                'col-md-1',
                                'col-md-1'
                              ]}
                              properties={[
                                {
                                  label: 'First name',
                                  name: 'firstName',
                                  type: 'text',
                                  bsClass: 'form-control',
                                  placeholder: user !== null ? user.firstName : '',
                                  maxLength: '128',
                                  disabled: !this.state.isEditable,
                                  onChange: this.handleChange 
                                },
                                {
                                  label: 'Last name',
                                  name: 'lastName',
                                  type: 'text',
                                  bsClass: 'form-control',
                                  placeholder: user !== null ? user.lastName : '',
                                  maxLength: '128',
                                  disabled: !this.state.isEditable 
                                },
                                {
                                  label: 'Male',
                                  name: 'gender',
                                  checked: user!==null&&user.gender==='male',
                                  value: 'male',
                                  type: 'radio',
                                  bsClass: 'form-check',
                                  disabled: !this.state.isEditable 
                                },
                                {
                                  label: 'Female',
                                  name: 'gender',
                                  value: 'female',
                                  checked: user!==null&&user.gender==='female',
                                  type: 'radio',
                                  bsClass: 'form-check',
                                  style: { margin: '10%' },
                                  disabled: !this.state.isEditable
                                }
                              ]}
                            />
                          <input  style={{display: 'none'}} type="text" name="id" value={user !== null?user._id:''}  />
                          <input id="inputImg" style={{display: 'none'}} onChange={this.displayImg} ref={ref => (this.fileUpload = ref)} type="file" accept="image/*" name="imageURL" />
                            <FormInputs
                              ncols={['col-md-9', 'col-md-3']}
                              properties={[
                                {
                                  label: 'Address',
                                  name: 'address',
                                  type: 'text',
                                  bsClass: 'form-control',
                                  placeholder: user !== null ? user.address : '',
                                  maxLength: '255',
                                  disabled: !this.state.isEditable
                                },
                                {
                                  label: 'PHONE NUMBER',
                                  name: 'phone',
                                  type: 'numeric',
                                  bsClass: 'form-control',
                                  value: user !== null ? user.phone : '',
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
                                    placeholder={user !== null ? user.bio : ''}
                                    disabled={!this.state.isEditable}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserAction: user => dispatch(updateUser(user)),
    authorizeUserAction: () =>dispatch(authorizeUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
