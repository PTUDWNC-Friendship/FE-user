
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class SubjectList extends Component {

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
                          <h2 className="mb-5 h3">[Category goes here] Subjects</h2>
                          <div className="rounded border jobs-wrap">

                            <Link to="job-single.html" className="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
                              <div className="company-logo blank-logo text-center text-md-left pl-3">
                                <img src="images/person_2.jpg" alt="" className="img-fluid mx-auto" />
                              </div>
                              <div className="job-details h-100">
                                <div className="p-3 align-self-center">
                                  <h3>Subject name goes here</h3>
                                  <div className="d-block d-lg-flex">
                                    <div><span/>Description goes here</div>
                                  </div>
                                </div>
                              </div>
                              <div className="job-category align-self-center">
                                <div className="p-3">
                                  <span className="text-info p-2 rounded border border-info">Find Tutors</span>
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

export default SubjectList;
