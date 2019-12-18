
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

class ContractList extends Component {


  render() {

    const subject = [];
    subject.push(<h>Default</h>);

    const { userState } = this.props;
    console.log(userState.user);

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
                                  <th>Student</th>
                                  <th>Duration</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Dinh Hau</td>
                                  <td>September 5th, 2019 - December 5th, 2019</td>
                                  <td>
                                  <span className="text-info p-2 rounded border border-info">
                                    In Progress
                                  </span>
                                  </td>
                                </tr>


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
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractList);
