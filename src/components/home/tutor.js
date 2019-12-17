import React from 'react';
import { Link } from "react-router-dom";

class Tutor extends React.Component {
    render() {
        return (
            <div className="site-wrap">

                <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('images/tutor-1.jpg')"}}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12" data-aos="fade">
                        <h1>Welcome back Prof. Testing,</h1>
                        <h1>Wish you have a great day!</h1>
                        <div className="col-md-12">
                          <p className="small">Let us know if you have something new.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              <div className="site-section bg-light">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-md-12 mb-5 mb-md-0"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h2 className="mb-5 h3">
                        Current <strong>Students</strong>
                      </h2>
                      <div className="rounded border jobs-wrap">
                        <Link
                          to="job-single.html"
                          className="job-item d-block d-md-flex align-items-center  border-bottom fulltime"
                        >
                          <div className="company-logo blank-logo text-center text-md-left pl-3">
                            <img
                              src="images/person_2.jpg"
                              alt=""
                              className="img-fluid mx-auto"
                            />
                          </div>
                          <div className="job-details h-100">
                            <div className="p-3 align-self-center">
                              <h3>Stephanie Croft</h3>
                              <div className="d-block d-lg-flex">
                                <div style={{marginRight: '20%'}}>
                                  <span className="icon-suitcase mr-1" />
                                  10th grade
                                </div>
                                <div style={{marginRight: '20%'}}>
                                  <span className="icon-room mr-1" />
                                  America
                                </div>
                                <div>
                                  <span className="icon-money mr-1" />
                                  $15 per hour
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="job-category align-self-center">
                            <div className="p-3">
                              <span className="text-info p-2 rounded border border-info">
                                Success
                              </span>
                            </div>
                          </div>
                        </Link>

                      </div>

                      <div className="col-md-12 text-center mt-5">
                        <Link to="/" className="btn btn-success rounded py-3 px-5">
                          <span className="icon-plus-circle" /> All Students
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;


                <div className="site-section block-15">
                  <div className="container">
                  <div className="text-center mb-5 section-heading">
                    <h2>How does it work?</h2>
                  </div>

                  <div className="d-block d-md-flex border-bottom">
                    <div className="text-center p-4 item border-right" data-aos="fade">
                      <span className="flaticon-worker display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-wrench display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                  </div>
                  <div className="d-block d-md-flex">
                    <div className="text-center p-4 item border-right" data-aos="fade">
                      <span className="flaticon-stethoscope display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-calculator display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                  </div>
                  </div>
                </div>

              </div>
        );
    }
}

export default Tutor;
