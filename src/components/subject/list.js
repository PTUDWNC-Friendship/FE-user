
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { fetchAllSubjects } from '../../actions/subject';

class SubjectList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      indexFirst: 0,
      indexLast: 0,
      currentPage: 1,
      dataPerPage: 5,
      subjects: [],
      isFetching: false
    };

    this.loadMorePage = this.loadMorePage.bind(this);
  }

  componentDidMount() {
    if (!this.state.isFetching && this.props.subjectState.allSubjects.length===0) {
      this.props.fetchAllSubjectsAction();
    }
    if (!this.state.isFetching && this.props.subjectState.allSubjects.length > 0) {
      this.setState({
        isFetching: true
      });
    }
  }
  
  componentDidUpdate(oldProps) {

    if(oldProps.subjectState.allSubjects !== this.props.subjectState.allSubjects) {
      const query = queryString.parse(this.props.location.search);
      const { categoryFilter, nameFilter } = query;
      console.log('TCL: componentDidUpdate -> query', query);
      console.log(categoryFilter);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        subjects: this.props.subjectState.allSubjects
        .filter(element => {
          if (!categoryFilter) {
            return true;
          }
          return element.category === categoryFilter && categoryFilter;
        })
        .filter(element => {
          if (!nameFilter) {
            return true;
          }
          return element.name === nameFilter && nameFilter;
        })
          .slice(0, 5)
      });
    }    
  }

  loadMorePage() {
    const query = queryString.parse(this.props.location.search);
    const { categoryFilter, nameFilter } = query;
    console.log("TCL: loadMorePage -> query", query);
    this.setState(prevState => ({
      indexLast: (prevState.currentPage + 1) * prevState.dataPerPage,
      currentPage: prevState.currentPage + 1,
      subjects: this.props.subjectState.allSubjects
        .filter(element => {
          if (!categoryFilter) {
            return true;
          }
          return element.category === categoryFilter && categoryFilter;
        })
        .filter(element => {
          if (!nameFilter) {
            return true;
          }
          return element.name === nameFilter && nameFilter;
        })
        .slice(
          prevState.indexFirst,
          (prevState.currentPage + 1) * prevState.dataPerPage
        )
    }));
  }

  render() {
    const { subjects } = this.state;
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
                      <div className="row">
                        <div
                          className="col-md-12 mb-5 mb-md-0"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <h2 className="mb-5 h3">
                            Subjects
                          </h2>
                          <div className="rounded border jobs-wrap">
                            {subjects.map((value, index) => {
                                return (
                                  <Link
                                  key={index.toString()}
                                    to="job-single.html"
                                    className="job-item d-block d-md-flex align-items-center border-bottom fulltime"
                                  >
                                    <div className="company-logo blank-logo text-center text-md-left pl-3">
                                      <img
                                        src=""
                                          // value.category === "Math" ? "abc.jpg" : {
                                          // value.category === "Geography" ? "xyz.jpg" : {
                                          // value.category === "Biology" ? "npm.jpg" : "" } }
                                        alt=""
                                        className="img-fluid mx-auto"
                                      />
                                    </div>
                                    <div className="job-details h-100">
                                      <div className="p-3 text-left">
                                        <h3>{value.name}</h3>
                                        <div className="d-block d-lg-flex">
                                          <div>
                                            <span />
                                            {value.description}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="job-category align-self-center">
                                      <div className="p-3">
                                        <span className="text-info p-2 rounded border border-info">
                                          Find Tutors
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                          </div>

                          <div className="col-md-12 text-center mt-5">
                            <button
                              onClick={this.loadMorePage}
                              className="btn btn-success rounded py-3 px-5"
                              type="button"
                            >
                              <span className="icon-plus-circle" /> Load More
                            </button>
                          </div>
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
    subjectState: state.subjectState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSubjectsAction: () => dispatch(fetchAllSubjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);

