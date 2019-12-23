
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTutorContracts } from '../../actions/contract';

class StudentList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 2,
      currentStudents: []
    };

    this.loadMorePage = this.loadMorePage.bind(this);

  }

  componentDidMount() {
    const { user } = this.props.userState;

    if (user !== null && !this.state.fetching ) {
      this.props.fetchTutorContractsAction(user._id);
    }

    const { allContracts } = this.props.contractState;
    if (allContracts.length !== 0 && !this.state.fetching)
    {
      this.setState({
        fetching: true
      });
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.contractState.allContracts !== this.props.contractState.allContracts) {
      const { search } = this.props;
      const { dataPerPage } = this.state;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        currentStudents: this.props.contractState.allContracts
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

  loadMorePage() {
    const { search } = this.props;

    this.setState(prevState => ({
      indexLast: (prevState.currentPage + 1) * prevState.dataPerPage,
      currentPage: prevState.currentPage + 1,
      currentStudents: this.props.contractState.allContracts
        .filter(element => {
          if (!search) {
            return true;
          }
          return true;
        //   return (
        //     element.category.toLowerCase().search(search.toLowerCase()) !==
        //       -1 ||
        //     element.name.toLowerCase().search(search.toLowerCase()) !== -1
        //   );
        })
        .slice(
          prevState.indexFirst,
          (prevState.currentPage + 1) * prevState.dataPerPage
        )
    }));
  }

  showContentTable() {
    const subject = [];
    subject.push(<h>Default</h>);

    const { currentStudents } = this.state;

    return (
      <div className="col-md-12" data-aos="fade">
        <Grid fluid>

          <div className="site-section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="mb-5 h3">All Students</h2>
                  <div className="rounded border jobs-wrap">

                    {currentStudents !== null ? (currentStudents.map((value, index) => {
                      return (
                        <a key={index.toString()}
                          href="#detailModal" data-toggle='modal'
                          className="job-item d-block d-md-flex align-items-center  border-bottom customtime">
                          <div className="company-logo blank-logo text-center text-md-left pl-3">
                            <img src={value.student.imageURL} alt="" className="img-fluid mx-auto" />
                          </div>
                          <div className="job-details h-100">
                            <div className="p-3 align-self-center">
                              <h3>{`${value.student.firstName} ${value.student.lastName}`}</h3>
                              <div className="d-block d-lg-flex">
                                <div style={{width: '40%'}}><span className="icon-room mr-1" /> {value.student.address}</div>
                                <div style={{width: '20%'}}><span className="icon-user mr-1" /> {value.student.gender}</div>
                                <div><span className="icon-phone mr-1" /> {value.student.phone}</div>
                              </div>
                            </div>
                          </div>
                          <div className="job-category align-self-center">
                            <div className="p-3">
                              {value.status.toLowerCase() === 'processing' ? (
                                <span className="text-warning p-2 rounded border border-warning" style={{minWidth: '10%'}}>
                                  Processing
                                </span>
                              ) : (null)}
                              {value.status.toLowerCase() === 'confirmed' ? (
                                <span className="text-info p-2 rounded border border-info">
                                  Tutoring
                                </span>
                              ) : null}
                              {value.status.toLowerCase() === 'finished' ? (
                                <span className="text-success p-2 rounded border border-success">
                                  Finished
                                </span>
                              ) : null}
                              {value.status.toLowerCase() === 'canceled' ? (
                                <span className="text-danger p-2 rounded border border-danger">
                                  Canceled
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </a>
                      );
                    })
                    ) : null}
                  </div>
                  <div className="col-md-12 text-center mt-5">
                    <button type="button" onClick={this.loadMorePage} className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle" /> Load More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }

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

              {/* <!-- Detail Modal HTML --> */}
              <div id="detailModal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered container">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">
                        <h4 className="modal-title">Student detail</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body">
                        Body ne`
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="OK"/>
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
    fetchTutorContractsAction: id => dispatch(fetchTutorContracts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
