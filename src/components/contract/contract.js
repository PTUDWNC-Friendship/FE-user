
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Input, FormLabel, TextField, MenuItem, Select, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import $ from 'jquery';
import swal from 'sweetalert';
import {setTutor, setStudent} from '../../actions/contract';
import './contract.css';
import { SERVER_URL } from '../../helpers/constant';




class Contract extends React.Component {

    constructor(props) {
        super(props);

          this.state = {
            allSubjectOfTutor: [],
            subjectName: null,
          };


    }
    
    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {

        const {contractState} = this.props;
        if(contractState.tutor!==null) {
            fetch(`${SERVER_URL}/user/tutor/${contractState.tutor._id }/subjects`)
            .then(response => response.json() )
            .then(data => {
                this.setState({
                    allSubjectOfTutor: data
                });
                data.forEach(element => {
                    if(element._id===contractState.detailContract._idSubject) {
                        this.setState({
                            subjectName: element.name
                        });
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }

    }
    

    onCreateContract(tutor,student) {

        if($('#hoursNumber').val()===''||$("[name='subject']")[0].value==='') {
            swal("Error!", "Something's wrong. Please check your input!", "error");
        } else {

            const contract = {
                _idStudent: student._id,
                _idTutor: tutor._id,
                _idSubject:  $("[name='subject']")[0].value,
                startDate: $('#startDate').val(),
                endDate: $('#endDate').val(),
                createdDate: (new Date()),
                policy: null,
                hoursNumber: $('#hoursNumber').val(),
                totalPrice: tutor.price!==null?parseInt( $('#hoursNumber').val(),10)*tutor.price:parseInt( $('#hoursNumber').val(),10)*10,
                revenue: tutor.price!==null?parseInt( $('#hoursNumber').val(),10)*tutor.price*0.2:parseInt( $('#hoursNumber').val(),10)*10*0.2,
                message: null,
                status: "Processing"
    
            };
    
            fetch(`${SERVER_URL}/contract/insert`, {
                method: 'POST',
                body: JSON.stringify({
                    ...contract
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                }
              })
                .then(response => response.json() )
                .then(data => {
                    swal("Sucessfully!", "Register studying with tutor successfully!", "success").then(()=>{
                        const { history } = this.props;
                        history.push('/list-tutors');
                    });
                })
                .catch((error) => {
    
                });
        }


    }


    render() {
        const {contractState} = this.props;

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
                                <FormLabel style={{color: 'red'}}> {contractState.student!==null?`${contractState.student.firstName} ${  contractState.student.lastName}`:''}</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Gender:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}>{contractState.student!==null?contractState.student.gender:'options'} </FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Adress:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}>{contractState.student!==null?contractState.student.address:'Viet Nam'}</FormLabel>
                                </Col>
                                </Row>
                                </Col>

                                <Col md={6}>
                                    <Row >
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Tutor's Name:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'red'}}>{contractState.tutor!==null?`${contractState.tutor.firstName} ${contractState.tutor.lastName}`:'Undefined'}</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Gender:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> {contractState.tutor!==null?contractState.tutor.gender:'options'}</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Adress:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}>{contractState.tutor!==null?contractState.tutor.address:'Viet Nam'}</FormLabel>
                                    </Col>
                                    </Row>
                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Price:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}><strong style={{color: 'red'}}>{contractState.tutor!==null&&contractState.tutor.hasOwnProperty('tutor')?`$${contractState.tutor.price}/h`:'$10/h'}</strong></FormLabel>
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
                            {contractState.detailContract===null?
                            (<Row className="d-flex justify-content-center mt-2">
                                <Col md={6} >
                                <FormLabel>Select Subject:</FormLabel>
                                </Col>
                                <Col md={6} >
                                <FormControl style={{minWidth: 180}}> 
                                <Select
                                    name = "subject"
                                    id="subjectID"
                                    placeholder="Select subject"    

                                    >
                                    {
                                        this.state.allSubjectOfTutor.length>0?this.state.allSubjectOfTutor.map(item=>(
                                        <MenuItem value={item._id}>{item.name}</MenuItem>
                                        )):null
                                    }
                                    </Select>
                                </FormControl>
                                </Col>
                            </Row>):(<Row className="d-flex justify-content-center mt-2">
                                <Col md={6} >
                                <FormLabel>Subject:</FormLabel>
                                </Col>
                                <Col md={6} >
                                <FormControl style={{minWidth: 180}}> 
                                    <FormLabel><strong>{this.state.subjectName}</strong></FormLabel>
                                </FormControl>
                                </Col>
                            </Row>)
                            }
                            <Row className="d-flex justify-content-center mt-4">
                                <Col md={6} >
                                <FormLabel>Rent Hours:</FormLabel>
                                </Col>
                                <Col md={6} >
                                    <FormControl style={{minWidth: 180}}> 
                                    {contractState.detailContract===null? <Input type="text" id="hoursNumber" placeholder="Enter rent hours" />:
                                    <Input type="text" id="hoursNumber" value={contractState.detailContract.hoursNumber} disabled  />}
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-4">
            
                                {contractState.detailContract===null?
                                         <Col md={6}>
                                         <FormControl style={{minWidth: 180}}>  
                                <TextField
                                        id="startDate"
                                        label="Start Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    /> </FormControl></Col> :
                                    <Col md={6}>
                                    <FormLabel>End Date:</FormLabel>
                                    <strong style={{marginLeft: '50px'}}>{contractState.detailContract.startDate}</strong>
                                    </Col>
                                }
                          
                          
                            {contractState.detailContract===null? 
                                  <Col md={6} >
                                        <FormControl style={{minWidth: 180}}>
                                    <TextField
                                        id="endDate"
                                        label="End Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </FormControl>
                                    </Col>  
                                    :
                                    <Col md={6}>
                                    <FormLabel>End Date:</FormLabel>
                                    <strong style={{marginLeft: '50px'}}>{contractState.detailContract.endDate}</strong>
                                    </Col>
                                }
                           
                          

                            </Row>



                                {contractState.detailContract===null?
                                <Row className="d-flex justify-content-center mt-4">
                                <Col md={6} >
                                <FormLabel>Created Date:</FormLabel>
                                </Col>
                                <Col md={6} style={{color: 'red'}}>
                                <strong>{`${(new Date()).getDate()  }-${ parseInt((new Date()).getMonth()+1) }-${(new Date()).getFullYear()}`}</strong>
                                </Col>
                                </Row>
                                :
                                <Row className="mt-4">
                                <Col md={6} style={{color: 'red'}}>
                                <FormLabel>Created Date:</FormLabel>
                                <strong style={{marginLeft: '50px'}}>{contractState.detailContract.createdDate}</strong>
                                </Col>
                                {contractState.detailContract!==null?
                                <Col md={6} style={{color: 'red'}}>
                                <FormLabel>Total price:</FormLabel>
                                <strong style={{marginLeft: '50px'}}>${contractState.detailContract.totalPrice}</strong>
                                </Col>:null}
                                </Row>
                               }


                        

                   
                            <Row className="d-flex justify-content-end mt-4" style={{paddingBottom: '100px'}}>
                               {contractState.detailContract===null?<Button onClick={()=>this.onCreateContract(contractState.tutor,contractState.student)} className="btn btn-outline-success py-2 px-4"  >Payment</Button>:null} 
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
        dispatch(setTutor(tutor));
      },
      onSetStudentContract: (student) => {
        dispatch(setStudent(student));
      }
    };
  
  };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Contract));
