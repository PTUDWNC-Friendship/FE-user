
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class StudentList extends Component {

  render() {

    const subject = [];
    subject.push(<h>Default</h>);

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
                        <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                          <h2 className="mb-5 h3">All Students</h2>
                          <div className="rounded border jobs-wrap">

                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/person_2.jpg" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Stephanie Croft</h3>
                                  <div className="d-block d-lg-flex">
                                    <div style={{width: '40%'}}><span className="icon-room mr-1" />America</div>
                                    <div><span className="icon-money mr-1" />$15 per hour</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-info p-2 rounded border border-info">Success</span>
                                </div>
                              </div>
                            </Link>

                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/person_1.jpg" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Tina Galloway</h3>
                                  <div className="d-block d-lg-flex">
                                    <div style={{width: '40%'}}><span className="icon-room mr-1" />Viet Nam</div>
                                    <div><span className="icon-money mr-1" />$15 per hour</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-warning p-2 rounded border border-warning">Tutoring</span>
                                </div>
                              </div>
                            </Link>


                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/person_3.jpg" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Johnathon Estes</h3>
                                  <div className="d-block d-lg-flex">
                                    <div style={{width: '40%'}}><span className="icon-room mr-1" />Canada</div>
                                    <div><span className="icon-money mr-1" />$15 per hour</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-warning p-2 rounded border border-warning">Tutoring</span>
                                </div>
                              </div>
                            </Link>


                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center fulltime">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/person_4.jpg" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Derrick Walls</h3>
                                  <div className="d-block d-lg-flex">
                                    <div style={{width: '40%'}}><span className="icon-room mr-1" />America</div>
                                    <div><span className="icon-money mr-1" />$15 per hour</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-info p-2 rounded border border-info">Success</span>
                                </div>
                              </div>
                            </Link>

                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center partime">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/company_logo_blank.png" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Frank Ridley</h3>
                                  <div className="d-block d-lg-flex">
                                    <div style={{width: '40%'}}><span className="icon-room mr-1" />America</div>
                                    <div><span className="icon-money mr-1" />$15 per hour</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-danger p-2 rounded border border-danger">Canceled</span>
                                </div>
                              </div>
                            </Link>


                          </div>

                          <div className="col-md-12 text-center mt-5">
                            <Link to="/" className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle" /> Load More</Link>
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

export default StudentList;
