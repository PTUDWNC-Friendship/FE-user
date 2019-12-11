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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TutorCard } from "../ui-components/TutorCard/TutorCard";
import { InfoModal } from "../ui-components/InfoModal/InfoModal";
import { fetchAllTutors } from '../../actions/user';


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
    const { getListTutors } = this.props;
    getListTutors();

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

  passingProps(element){
    this.setState({
      element
    });
  };

  render() {
    const  {userState} = this.props;
    const {user} = userState;

    const subject = [];
    for (let i = 0; i < 9; i+=1) {
      subject.push(
        <h>Default</h>
      );
    };


    return (
      <div >
        <div style={{height: '113px'}} />

        <div className="unit-5 overlay" style={{backgroundImage: "url('images/tutor-1.jpg')", minHeight: '200px'}} />
        <div className="site-section bg-light">
        <div className="container">
          <div className="row align-items-center">
          {this.state.element !== null ? (
            <InfoModal
              avatar={this.state.element.imageURL!==null?this.state.element.imageURL:"images/person_2.jpg"}
              // eslint-disable-next-line no-nested-ternary
              name={`${this.state.element.firstName} ${this.state.element.lastName}`}
              title={(this.state.element.title!==null)?this.state.element.title:'Teacher'}
              address={this.state.element.address!==null?this.state.element.address:'Việt Nam'}
              price={this.state.element.price!==null?this.state.element.price:'10'}
              subjects={ this.state.element.subjects!==null?this.state.element.subjects:subject }
              bio={this.state.element.bio!==null?this.state.element.bio:'There is no bio of this tutor!'}
              rate='5.0 stars'
            />
          ) : null}


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
                {userState.allTutors.map(element=>(
                  <Col md={4} >
                    <Button
                      type="button" className="btn btn-light" data-toggle="modal" data-target="#myModal" style={{padding:'0px'}}
                      onClick={() => this.passingProps(element)}
                      >
                      <TutorCard
                        avatar={element.imageURL!==null?element.imageURL:"images/person_2.jpg"}
                        // eslint-disable-next-line no-nested-ternary
                        name={`${element.firstName} ${element.lastName}`}
                        title={(element.title!==null)?element.title:'Teacher'}
                        address={element.address!==null?element.address:'Việt Nam'}
                        price={element.price!==null?element.price:'10'}
                        subjects={ element.subjects!==null?element.subjects:subject }
                        rate='5.0 stars'

                      />
                    </Button>
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
  bindActionCreators(
    {
      getListTutors: fetchAllTutors
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorList);
