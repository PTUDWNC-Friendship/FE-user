
import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { Input, FormLabel, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setTutor, setStudent} from '../../actions/contract';
import './contract.css';





class Contract extends React.Component {

    render() {

        const {contractState} = this.props;
        if(contractState.student!==null)
        {
            console.log(contractState.student);
        }

        return (
            <div style={{paddingTop: '150px', backgroundColor: '#d5e6ed', color: 'black'}}>

                <Grid  >
                    <div>
                            <Row >
                                <Col md={6}>
                                <Row>
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Your Name:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'red'}}> {contractState.student!==null?contractState.student.firstNamr+' ' + contractState.student.lastName:''}</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Gender:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Adress:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}> 100/53 Dương Bá Trạc</FormLabel>
                                </Col>
                                </Row>
                                </Col>

                                <Col md={6}>
                                    <Row >
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Tutor's Name:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'red'}}> Nguyễn Duy Hậu Super</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Gender:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Adress:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> 100/53 Dương Bá Trạc</FormLabel>
                                    </Col>
                                    </Row>
                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Price:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}><strong style={{color: 'red'}}>$2000/h</strong></FormLabel>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <p>
                                <strong>Responsibilities of the Tutor:</strong>
                                </p>
                                <p>
                                a. The teacher shall work to the best of his/her abilities to teach his/her students English as efficiently as possible and within the general goals and guidelines set forth by the school. The teacher will familiarize him/herself with the school’s policies, programs and curricula and attempt to meet the general timetable outlined by school.
                                </p>
                                <p>
                                b. The teacher is responsible for the general atmosphere and conduct, academic and social, in his/her classroom and behavior of students during his/her scheduled class hours, including break time. 
                                </p>
                                <p>
                                c. The teacher shall conduct and dress him/herself in a professional manner. 
                                </p>
                                <p>
                                d. The teacher shall report any specific student difficulties, academic or social, to the school’s management and, with their assistance, communicate with the student’s parents in order to effect an appropriate solution to the problem. 
                                </p>
                                <p>
                                e. The teacher shall attend teachers’ meetings every week. S/he is required to seek and share ideas that may benefit both him/herself as well as the other teachers in the school
                                </p>
                                <p>
                                f. The teacher shall prepare for each class, and correct homework. Student evaluation reports shall be prepared every week. 
                                </p>
                                <p>
                                g. The teacher shall assist the school director or manager in placing newly-arrived students by conscientiously screening any new prospects introduced to the teacher’s class.
                                </p>
                                <p>
                                h. The teacher shall decorate his/her classroom, participate in the creation of teaching aids and help maintain school property.
                                </p>
                                <p>
                                i. If the teacher cannot come to work for some reason, s/he should inform the school, as well as work in advance with the school to find a suitable substitute. The teacher must also inform the substitute of the components to be taught during his/her absence. If these conditions are not met, the teacher will be considered truant and shall be held responsible for any related losses, financial or otherwise
                                </p>
                            </Row>
                            <br />
                            <hr className="style1" />
                            <br />
                            <Row className="d-flex justify-content-center mt-2">
                                <Col md={6} >
                                <FormLabel>Rent Hours:</FormLabel>
                                </Col>
                                <Col md={6} >
                                    <Input type="text" placeholder="Enter rent hours" />
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-4">
                            <Col md={6} >
                                    <TextField
                                        id="date"
                                        label="Start Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                            </Col>
                            <Col md={6}>

                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                            </Col>

                            </Row>
                            <Row className="d-flex justify-content-center mt-4">
                            <Col md={6} >
                                <FormLabel>Created Date:</FormLabel>
                                </Col>
                                <Col md={6} style={{color: 'red'}}>
                                <strong>{`${(new Date()).getDate()  }-${ parseInt((new Date()).getMonth()+1) }-${(new Date()).getFullYear()}`}</strong>
                                </Col>

                            </Row>
                            <Row className="d-flex justify-content-end mt-4" style={{paddingBottom: '100px'}}>
                                <Link to="/" className="btn btn-outline-success py-2 px-4"  >Payment</Link>
                            </Row>
                            </div>
                    </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contractState: state.contractState
    };
  };
  
  const mapDispatchToProps = dispatch =>
  {
    return {
      onSetTutorContract: (tutor) => {
        dispatch(setTutor(tutor))
      },
      onSetStudentContract: (student) => {
        dispatch(setStudent(student))
      }
    }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
