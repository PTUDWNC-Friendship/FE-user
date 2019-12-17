
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchAllContracts } from '../../actions/contract';
import { fetchUserById } from '../../actions/user';

class SpecialtyList extends Component {


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
              {/* Modal Add Specialties */}
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
                          <h1>Subject</h1>
                          <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                          <h1>Category</h1>
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
                          <h1>Description</h1>
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
                          <h1>Subject</h1>
                          <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                          <h1>Category</h1>
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
              {/* <!-- Delete Modal HTML --> */}
              <div id="deleteSpecialtyModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Delete Specialty</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="Delete"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              { this.showContentTable() }
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
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllContractsAction: () => dispatch(fetchAllContracts()),
    fetchUserByIdAction: id => dispatch(fetchUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtyList);
