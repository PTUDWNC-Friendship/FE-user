
import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTutorContracts } from '../../actions/contract';
import { fetchUserById } from '../../actions/user';

class StudentContractList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false
    };

  }

  componentDidUpdate() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchUserByIdAction(user._id);
      this.props.fetchTutorContractsAction(user._id);
    }

    const { allContracts } = this.props.contractState;
    if (allContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
      console.log(allContracts);
    }
  }


  render() {

    const thTable = ["Student", "Duration", "Status"];
    const { allContracts } = this.props.contractState;

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
                                {allContracts !== null ? allContracts.map((value, index) => {
                                  return (
                                    <tr key={index.toString()}>
                                      <td>{`${value.student.firstName} ${value.student.lastName}`}</td>
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
    fetchTutorContractsAction: id => dispatch(fetchTutorContracts(id)),
    fetchUserByIdAction: id => dispatch(fetchUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContractList);
