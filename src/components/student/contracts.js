
import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import $ from 'jquery';
import { fetchStudentContracts } from '../../actions/contract';
import { fetchUserById } from '../../actions/user';


class StudentContractList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      ratingValue: 0
    };

  }

  componentDidMount() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchStudentContractsAction(user._id);
    }

    const { allStudentContracts } = this.props.contractState;
    if (allStudentContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
    }

  }

  componentDidUpdate() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchStudentContractsAction(user._id);
    }

    const { allStudentContracts } = this.props.contractState;
    if (allStudentContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
    }

    const { userState } = this.props;
    if (userState.user !== null) {

      if (userState.user.role === 'tutor') {
        this.props.history.push('/home-tutor');
      }
    } else {
      this.props.history.push('/login');
    }
  }

  setRatingValue(event) {
    event.preventDefault();
      this.setState({
        ratingValue:  parseInt(event.target.value,10)
      });
  }

  render() {

    const thTable = ["Tutor", "Duration", "Status", "Evaluate for tutor"];
    const { allStudentContracts } = this.props.contractState;

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

              <div className="col-md-12" data-aos="fade">
                <Grid fluid>
                  <div className="site-section bg-light">
                    <div className="container">
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
                                {allStudentContracts !== null ? allStudentContracts.map((value, index) => {
                                  return (
                                    <tr key={index.toString()}>
                                      <td>{`${value.tutor.firstName} ${value.tutor.lastName}`}</td>
                                      <td>
                                      <b>FROM </b>
                                      {value.startDate} <br />
                                      <b> TO </b>
                                      {value.endDate}</td>
                                      <td>
                                      <span className="text-info p-2 rounded border border-info">
                                        {value.status}
                                      </span>
                                      <Button className="fa fa-eye ml-5 p-0" />
                                      </td>
                                      <td>
                                      <Fab aria-label="like" data-toggle="modal" data-target="#myModal">
                                            <FavoriteIcon />
                                        </Fab>
                                      </td>
                                    </tr>
                                  );
                                }) : null}
                              </tbody>
                          </table>

                          <div className="clearfix">
                              <ul className="pagination">
                                  <li className="page-item disabled"><a href="#">Previous</a></li>
                                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                                  <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                  <li className="page-item"><a href="#" className="page-link">4</a></li>
                                  <li className="page-item"><a href="#" className="page-link">5</a></li>
                                  <li className="page-item"><a href="#" className="page-link">Next</a></li>
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

         {/* Modal */}
        <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered ">

         
            <div className="modal-content">
            <div className="modal-header">
                            <h4 className="modal-title">Evaluate for tutor</h4>
            </div>
            <div className="modal-body ">
                <div className="d-flex justify-content-center">

      
                <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"></Typography>
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
                    label="Multiline"
                    multiline
                    rows="4"
                    variant="filled"
                    />
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">

                    <Button style={{width: '60%'}} className="btn btn-danger" color="secondary">
                        Dispute
                    </Button>

                <button id="closeModal" style={{display: 'none'}} type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
    fetchStudentContractsAction: id => dispatch(fetchStudentContracts(id)),
    fetchUserByIdAction: id => dispatch(fetchUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContractList);
