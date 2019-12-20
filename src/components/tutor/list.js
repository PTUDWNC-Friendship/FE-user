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
import React, { Component } from 'react';
import { Grid, Row, Col, Button, Alert } from 'react-bootstrap';
import {  withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import { TutorCard } from '../ui-components/TutorCard/TutorCard';
import { InfoModal } from '../ui-components/InfoModal/InfoModal';
import { fetchAllTutors } from '../../actions/user';
import {setTutor, setStudent} from '../../actions/contract';


class TutorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      isChangeable: false,
      element: null
    };
    this.enableEditProfile = this.enableEditProfile.bind(this);
    this.enableChangePassword = this.enableChangePassword.bind(this);
  }

  componentDidMount() {
    this.props.getListTutors();
  }


  onUpdateInfor = e => {
    e.preventDefault();
  };


  setContract(tutor, student) {
   const {onSetStudentContract, onSetTutorContract, history } = this.props;
   Promise.resolve(
    onSetStudentContract(student),
    onSetTutorContract(tutor)
   ).then(()=>{
      history.push('/contract');
   });
  }

  passingProps(element) {
    if(element!==null) {

      const alerts = [];
      $('#subjectModal').empty();
      if(element.subjects!==null) {
        for (let i = 0; i < element.subjects.length; i+=1) {

          $('#subjectModal').append( `<div class="alert alert-info" style={{float:'left', padding: '15%', marginLeft: '3%'}}>${  element.subjects[i]  }</div>`);
        }
      }

      $("#imgModal").attr("src",element.imageURL);
      $('#titleModal').text(element.title!==null?`${element.title} `:'tutor');
      $('#priceModal').text(element.price!==null?`$${element.price} `:'$10');
      $('#nameModal').text(`${element.firstName} ${element.lastName}`);
      $('#addressModal').text(element.address!==null?`${element.address} `:'Việt Nam');
      $('#bioModal').text(element.bio);
      $('#rateModal').text(element.rate!==null&&element.hasOwnProperty('rate')?element.rate:'5.0 stars');

      $('#modalButton').click();
    }
  }

  detailInfor() {
    $('#tutorCard').click();
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

  render() {
    const { userState } = this.props;
    const subject = [];
    subject.push(<h>Default</h>);

    return (
      <div>
        <div style={{ height: '113px' }} />

        <div
          className="unit-5 overlay"
          style={{
            backgroundImage: "url('images/tutor-1.jpg')",
            minHeight: '200px'
          }}
        />
        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-center">              
                <InfoModal />        
              <div className="col-md-12" data-aos="fade">
                <Grid fluid>
                  <Row style={{ marginBottom: '3%' }}>
                    <Col md={1}>Filters: </Col>

                    <Col md={3}>
                      <select
                        className="js-example-basic-single"
                        name="state"
                        style={{ minWidth: '200px' }}
                      >
                        <option value="ANY">Any country</option>
                        <option value="VN">Viet Nam</option>
                        <option value="US">USA</option>
                      </select>
                    </Col>

                    <Col md={3}>
                      <select
                        className="js-example-basic-single"
                        name="state"
                        style={{ minWidth: '200px' }}
                      >
                        <option value="ANY">Any hourly rate</option>
                        <option value="10ph">$10/hr and below</option>
                        <option value="20">$10/hr - $30/hr</option>
                        <option value="20">$30/hr - $60/hr</option>
                        <option value="20">$60/hr and above</option>
                      </select>
                    </Col>

                    <Col md={3}>
                      <select
                        className="js-example-basic-single"
                        name="state"
                        style={{ minWidth: '200px' }}
                      >
                        <option value="ANY">Any subject</option>
                        <option value="math">Math</option>
                        <option value="phy">Physic</option>
                        <option value="che">Chemistry</option>
                        <option value="his">History</option>
                      </select>
                    </Col>
                  </Row>
                  <Button id="modalButton" style={{display: 'none'}} data-toggle="modal" data-target="#myModal">modal</Button>
                  <Row>
                    {userState.allTutors.map(element => (
                      <Col md={4}>
                        <Grid
                          className="btn btn-light"
                          style={{ padding: '0px'}}
                         
                        >
                          <Grid id="tutorCard" onClick={() => this.passingProps(element)}>
                          <TutorCard
                            avatar={
                              element.imageURL !== null
                                ? element.imageURL
                                : 'images/person_2.jpg'
                            }
                            // eslint-disable-next-line no-nested-ternary
                            name={`${element.firstName} ${element.lastName}`}
                            title={
                              element.title !== null ? element.title : 'Tutor'
                            }
                            address={
                              element.address !== null
                                ? element.address
                                : 'Việt Nam'
                            }
                            price={
                              element.price !== null ? element.price : '10'
                            }
                            subjects={
                              element.subjects !== null
                                ? element.subjects
                                : subject
                            }
                            rate="5.0 stars"
                          />
                          </Grid>
                          {userState.user !== null ? (
                          <div>
                            {userState.user.role==='student'?(
                              <Row>
                              <Col md={6}>
                              <Button  onClick={()=>this.detailInfor()}  className="btn btn-outline-danger py-3 px-4" style={{width: '83%'}}>
                              {' '}
                              Detail
                              </Button>
                              </Col>
                              <Col md={6}>
                              <Button type="button" onClick={()=>this.setContract(element, userState.user)}  className="btn btn-outline-success py-3 px-4" style={{width: '83%'}}>
                              {' '}
                              Booking
                            </Button>
                              </Col>
                            </Row>
                          ) : null}
                          </div>
                        ): null}

                          
                        </Grid>
                      </Col>
                    ))}
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

const mapDispatchToProps = dispatch =>
{
  return {
    onSetTutorContract: (tutor) => {
      dispatch(setTutor(tutor));
    },
    onSetStudentContract: (student) => {
      dispatch(setStudent(student));
    },
    getListTutors: bindActionCreators(fetchAllTutors,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TutorList));
