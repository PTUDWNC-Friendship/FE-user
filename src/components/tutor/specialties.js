
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUserById, updateTutor } from '../../actions/user';
import { insertTutorSubject, editTutorSubject, deleteTutorSubject } from '../../actions/subject';

class SpecialtyList extends Component {
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
    }
    if (this.props.userState.tutor !== null && !this.state.fetching ) {
      this.setState({
        fetching: true
      });
    };
  }

  onInsertTutorSubject = e => {
    const { tutor } = this.props.userState;
    const { subject } = this.props.subjectState;

    console.log(subject);
    

    this.props.insertTutorSubjectAction(e.target.subjectName.value, e.target.subjectCategory.value, e.target.subjectDesc.value);

    // if (subject !== null)
    // {
    //   const newTutor = {
    //     _id: tutor.id,
    //     subjects: [tutor.subjects, subject._id]}
    //   }
    // }

  }

   showContentTable() {
     const thTable = ["name", "category", "description", "Actions"];
     const { tutor } = this.props.userState;
     return (
       <div className="col-md-12" data-aos="fade">
         <Grid fluid>
          <div className="site-section bg-light">
            <div className="container">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>
                        Your <b>Specialties</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="#addSpecialtyModal"
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons">&#xE147;</i>{' '}
                        <span>Add New Specialty</span>
                      </a>
                    </div>
                  </div>
                </div>
                <table className="table specialties table-striped table-hover">
                  <thead>
                    <tr>
                      {thTable.map((value, index) => {
                        return <th key={index.toString()}>{value}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                     {tutor !== null ? tutor.subjects.map((value, index) => {
                       return (
                         <tr key={index.toString()}>
                           <td>{value.name}</td>
                           <td>{value.category}</td>
                           <td>{value.description}</td>
                           <td>
                             <a
                               href="#editSpecialtyModal"
                              className="edit"
                              data-toggle="modal"
                            >
                              <i
                                className="material-icons"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                &#xE254;
                              </i>
                            </a>
                            <a
                              href="#deleteSpecialtyModal"
                              className="delete"
                              data-toggle="modal"
                            >
                              <i
                                className="material-icons"
                                data-toggle="tooltip"
                                title="Delete"
                              >
                                &#xE872;
                              </i>
                            </a>
                          </td>
                        </tr>
                      );
                    }) : null}
                  </tbody>
                </table>
                <div className="clearfix">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a href="#">Previous</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  };

  render() {

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
                    <form onSubmit={this.onInsertTutorSubject}>
                      <div className="modal-header">
                        <h4 className="modal-title">New Specialty</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <h>Subject</h>
                           <input type="text" name='subjectName' className="form-control" required/>
                         </div>
                         <div className="form-group">
                           <h>Category</h>
                           <select
                             className="form-control" name='subjectCategory'
                           >
                            <option value="Math">Math</option>
                            <option value="Literature">Literature</option>
                            <option value="Biology">Biology</option>
                            <option value="Languages">Languages</option>
                            <option value="Geography">Geography</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="History">History</option>
                           </select>
                         </div>
                         <div className="form-group">
                           <h>Description</h>
                           <textarea className="form-control" name='subjectDesc' required />
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
                        <h4 className="modal-title">Edit specialty</h4>
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



              {/* <!-- Delete Modal HTML --> */}
              <div id="deleteSpecialtyModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Delete specialty</h4>
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

const mapStateTopProps = state => {
  return {
    userState: state.userState,
    subjectState: state.subjectState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserByIdAction: id => dispatch(fetchUserById(id)),
    insertTutorSubjectAction: (name, category, description) => dispatch(insertTutorSubject(name, category, description))
  };
};
export default connect(mapStateTopProps, mapDispatchToProps)(SpecialtyList);
