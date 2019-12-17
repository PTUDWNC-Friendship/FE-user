
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

            {/* <!-- Edit Modal HTML --> */}
              <div id="addSpecialtyModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">New Specialty</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <h>Subject</h>
                          <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                          <h>Category</h>
                          <select
                            className="form-control"
                          >
                            <option value="math">Math</option>
                            <option value="literature">Literature</option>
                            <option value="biology">Biology</option>
                            <option value="languages">Languages</option>
                            <option value="geography">Geography</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="history">History</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <h>Description</h>
                          <textarea className="form-control" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-success" value="Add"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Edit Modal HTML --> */}
              <div id="editSpecialtyModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Specialty</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <h>Subject</h>
                          <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                          <h>Category</h>
                          <select
                            className="form-control"
                          >
                            <option value="math">Math</option>
                            <option value="literature">Literature</option>
                            <option value="biology">Biology</option>
                            <option value="languages">Languages</option>
                            <option value="geography">Geography</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="history">History</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <h>Description</h>
                          <textarea className="form-control" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-info" value="Save"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
                          <table className="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>Subject</th>
                                  <th>Category</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>World War II</td>
                                  <td>History</td>
                                  <td>Learn about how it all started, etc.</td>
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
