
import React, { Component } from 'react';
import {  withRouter  } from 'react-router-dom';
import { Grid, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
import $ from 'jquery';
import swal from 'sweetalert';
import { fetchStudentContracts, setTutor, setStudent, setDetailContract } from '../../actions/contract';
import { fetchUserById } from '../../actions/user';
import {SERVER_URL} from '../../helpers/constant';


class StudentContractList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      ratingValue: 0,
      idFeedback: null,
      contract: null,

      search: '',
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 5,
      studentContracts: [],
      totalPage: 0
    };

    this.choosePage = this.choosePage.bind(this);
  }

  componentDidMount() {
    const { user } = this.props.userState;
    if (user!== null) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchStudentContractsAction(user._id);
    }
  }

  componentDidUpdate(oldProps) {
    const { user } = this.props.userState;
    // Authentication
    if (user !== null) {
      if (user.role === 'tutor') {
        this.props.history.push('/home-tutor');
      }
    } else {
      this.props.history.push('/login');
    }

    // Pagination
    if ( oldProps.contractState.allStudentContracts !== this.props.contractState.allStudentContracts ) {
      const { search, dataPerPage} = this.state;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        totalPage: Math.round(this.props.contractState.allStudentContracts.length / this.state.dataPerPage),
        studentContracts: this.props.contractState.allStudentContracts
          .filter(element => {
            if (!search) {
              return true;
            }
            return true;
            // return (
            //   element.category.toLowerCase().search(search.toLowerCase()) !==
            //     -1 ||
            //   element.name.toLowerCase().search(search.toLowerCase()) !== -1
            // );
          })
          .slice(0, dataPerPage)
      });
    }

  }

  // eslint-disable-next-line react/sort-comp
  choosePage(page) {
    const { search } = this.state;
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState(prevState => {
      const indexFirst = (page - 1) * prevState.dataPerPage;
      const indexLast = page * prevState.dataPerPage;
      return {
        indexFirst,
        indexLast,
        currentPage: page,
        studentContracts: this.props.contractState.allStudentContracts
          .filter(element => {
            if (!search) {
              return true;
            }
            return true;
            // return (
            //   element.category.toLowerCase().search(search.toLowerCase()) !==
            //     -1 ||
            //   element.name.toLowerCase().search(search.toLowerCase()) !== -1
            // );
          })
          .slice(indexFirst, indexLast)
      };
    });
  }

  onSetValueContract(value) {
      this.setState({
        contract: value
      });
      // eslint-disable-next-line no-prototype-builtins
      if(value.hasOwnProperty('feedback')) {
        $('#messageContract').val(value.feedback.comment);
        this.setState({
            idFeedback: value._idFeedback,
            ratingValue:  parseInt(value.feedback.rate,10),
          });
      } else {
        this.setState({
            idFeedback: null,
            ratingValue: null
        });
      }
  }


  onChangeSatus(value) {

    const contract = {
        ...value
    };
    contract.status = "finished";
    delete contract.tutor;
    delete contract.student;
    delete contract.feedback;
    fetch(`${SERVER_URL}/contract/update`, {
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
            const { user } = this.props.userState;

            if (user !== null ) {
              this.props.fetchStudentContractsAction(user._id);
            }
            swal("Sucessfully!", "Change status of contract successful!", "success").then(()=>{
                $('#closeModal').click();
            });
        })
        .catch((error) => {
            console.log(error);
        });

  }

  onDetailContract(value) {
    const {onSetStudentContract, onSetTutorContract,onSetDetailContract, history,userState } = this.props;
    Promise.resolve(
     onSetStudentContract(userState.user),
     onSetTutorContract(value.tutor),
     onSetDetailContract(value),
    ).then(()=>{
       history.push('/contract');
    });
  }

  setRatingValue(event) {
    event.preventDefault();
      this.setState({
        ratingValue:  parseInt(event.target.value,10)
      });
  }

  submitEvaluate() {

    const feedback = {
        _id: this.state.idFeedback!==null?this.state.idFeedback:null,
        _idStudent: this.props.userState._id,
        comment:    $('#messageContract').val(),
        rate:   this.state.ratingValue,
        
    };

  
    if(feedback._id===null) {
        fetch(`${SERVER_URL}/feedback/insert`, {
            method: 'POST',
            body: JSON.stringify({
                ...feedback
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          })
            .then(response => response.json() )
            .then(data => {

                const contract = {
                    ...this.state.contract,
                    _idFeedback: data._id
                };
                delete contract.tutor;
                delete contract.feedback;
                fetch(`${SERVER_URL}/contract/update`, {
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
                        const { user } = this.props.userState;

                        if (user !== null ) {
                          this.props.fetchStudentContractsAction(user._id);
                        }
                        swal("Sucessfully!", "Evaluate for tutor successfully!", "success").then(()=>{
                            $('#closeModal').click();
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        fetch(`${SERVER_URL}/feedback/update`, {
            method: 'POST',
            body: JSON.stringify({
                ...feedback
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          })
            .then(response => response.json() )
            .then(data => {
                const { user } = this.props.userState;

                if (user !== null ) {
                  this.props.fetchStudentContractsAction(user._id);
                }
                swal("Sucessfully!", "Evaluate for tutor successfully!", "success").then(()=>{
                    $('#closeModal').click();
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


  }

  submitReport() {
    const contract = {
        ...this.state.contract
    };
    contract.message = $('#reportMsgContract').val();
    contract.status = "disputed";
    delete contract.tutor;
    delete contract.feedback;
    fetch(`${SERVER_URL}/contract/update`, {
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
            const { user } = this.props.userState;

            if (user !== null ) {
              this.props.fetchStudentContractsAction(user._id);
            }
            swal("Sucessfully!", "Dispute contract successfully!", "success").then(()=>{
                $('#closeModalReport').click();
            });
        })
        .catch((error) => {
            console.log(error);
        });
  }

  render() {

    const thTable = ["Tutor", "Duration", "Status","Detail","Change status to finished" ,"Evaluate for tutor", "Dispute contract"];
    const { studentContracts, currentPage, totalPage } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= this.state.totalPage; i+=1) {
      pageNumbers.push(<li className={i === this.state.currentPage ? "page-item active" : "page-item"}><button type="button" onClick={() => this.choosePage(i)} className="page-link">{i}</button></li>);
    }

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
          <div >
            <div className="row align-items-center">

              <div className="col-md-12" data-aos="fade">
                <Grid fluid>
                  <div className="site-section bg-light">
                    <div >
                      <div className="table-wrapper">
                          <div className="table-title">
                              <div className="row">
                                  <div className="col-sm-6">
                                    <h2>All <b>Contracts</b></h2>
                                  </div>
                              </div>
                          </div>
                          <table className="contracts table table-striped table-hover">
                              <thead>
                                <tr>
                                  {thTable.map((value, index) => {
                                    return <th key={index.toString()}>{value}</th>;
                                  })}
                                </tr>
                              </thead>
                              <tbody>
                                {studentContracts !== null ? studentContracts.map((value, index) => {
                                  return (
                                    <tr key={index.toString()} >
                                      <td>{`${value.tutor.firstName} ${value.tutor.lastName}`}</td>
                                      <td>
                                      <b>FROM </b>
                                      {value.startDate} <br />
                                      <b> TO </b>
                                      {value.endDate}</td>
                                      <td >
                                      <span className="text-info p-2 rounded border border-info">
                                        {value.status}
                                      </span>
                                     
                                      </td>
                                      <td >
                                      <Fab title="Evaluate for tutor" onClick={()=>this.onDetailContract(value)}   aria-label="like" >
                                             <VisibilityIcon />
                                          </Fab>
                                        </td>
                                      {value.status==='confirmed'?(
                                         <td  >
                                         <Fab title="Change status for contract" onClick={()=>this.onChangeSatus(value)} aria-label="like" >
                                            <AutorenewIcon/>
                                         </Fab>
                                        </td>):<td/>}
                                      {value.status==='finished'?(
                                         <td >
                                          <Fab title="Evaluate for tutor" onClick={()=>this.onSetValueContract(value)} aria-label="like" data-toggle="modal" data-target="#myModal">
                                             <FavoriteIcon />
                                          </Fab>
                                         </td>
                                       
                                      ):(
                                     <td/>
                                     )}
                                    {value.status==='confirmed'?(
                                         <td >
                                          <Fab title="Evaluate for tutor" onClick={()=>this.onSetValueContract(value)} aria-label="like" data-toggle="modal" data-target="#myModalCancel">
                                             <CancelIcon />
                                          </Fab>
                                         </td>
                                       
                                      ):(
                                     <td/>
                                     )}
                                     <td/>
                                    </tr>
                                  );
                                }) : null}
                              </tbody>
                          </table>

                          <div className="clearfix">
                              <ul className="pagination">
                                  <li className={currentPage === 1 ? "page-item disabled" : "page-item"}><button type="button" className="page-link" onClick={() => this.choosePage(currentPage - 1)}>Previous</button></li>
                                  {pageNumbers}
                                  <li className={currentPage === totalPage ? "page-item disabled" : "page-item"}><button type="button" className="page-link" onClick={() => this.choosePage(currentPage + 1)}>Next</button></li>
                              </ul>
                          </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </div>

         {/* Modal Evaluate */}
        <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered ">

         
            <div className="modal-content">
            <div className="modal-header">
                            <h4 className="modal-title">Evaluate for tutor</h4>
            </div>
            <div className="modal-body ">
                <div className="d-flex justify-content-center">

      
                <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"/>
                            <Rating
                                id="ratingContract"
                                name="simple-controlled"
                                value={this.state.ratingValue}
                                onChange={(e)=>this.setRatingValue(e)}
                                max={10}
                            />
                </Box>
                </div>
                <div className="d-flex justify-content-center">
                    <TextField

                    style={{width: '100%'}}
                    id="messageContract"
                    label="Comment"
                    multiline
                    rows="4"
                    variant="filled"
                    />
                </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">

                    <Button onClick={()=>this.submitEvaluate()} style={{width: '60%'}} className="btn btn-success" color="secondary">
                        Submit
                    </Button>

                <button id="closeModal" style={{display: 'none'}} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>

        </div>
        </div>

                 {/* Modal Canceled */}
                 <div id="myModalCancel" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered ">

         
            <div className="modal-content">
            <div className="modal-header">
                            <h4 className="modal-title">Cancel contract</h4>
            </div>
            <div className="modal-body ">

                <div className="d-flex justify-content-center">
                    <TextField
                    style={{width: '100%'}}
                    id="reportMsgContract"
                    label="Reason"
                    multiline
                    rows="4"
                    variant="filled"
                    />
                </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">

                    <Button onClick={()=>this.submitReport()} style={{width: '60%'}} className="btn btn-primary" color="secondary">
                        Send
                    </Button>

                <button id="closeModalReport" style={{display: 'none'}} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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
    contractState: state.contractState,
    loading: state.loading,
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetTutorContract: (tutor) => {
      dispatch(setTutor(tutor));
    },
    onSetStudentContract: (student) => {
      dispatch(setStudent(student));
    },
    onSetDetailContract: (detailContract) =>{
      dispatch(setDetailContract(detailContract));
    },
    fetchStudentContractsAction: id => dispatch(fetchStudentContracts(id)),
    fetchUserByIdAction: id => dispatch(fetchUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentContractList));
