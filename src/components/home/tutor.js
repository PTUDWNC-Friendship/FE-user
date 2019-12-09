import React from 'react';
import { Link } from "react-router-dom";

class Tutor extends React.Component {
    render() {
        return (
            <div className="site-wrap">
                <div style={{height: "113px"}} />

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
                      <div className="col-md-8 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
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
                                  <div className="mr-3"><span className="icon-suitcase mr-1" />10th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1" />America</div>
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
                                  <div className="mr-3"><span className="icon-suitcase mr-1" />11th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1" />Viet Nam</div>
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
                                  <div className="mr-3"><span className="icon-suitcase mr-1" />10th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1" />Canada</div>
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
                                  <div className="mr-3"><span className="icon-suitcase mr-1" />11th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1" />America</div>
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
                                  <div className="mr-3"><span className="icon-suitcase mr-1" />12th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1" />America</div>
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
                      <div className="col-md-4 block-16" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex mb-0">
                          <h2 className="mb-5 h3 mb-0">Tutoring</h2>
                          <div className="ml-auto mt-1"><Link to="/" className="owl-custom-prev text-success">Prev</Link> / <Link to="/" className="owl-custom-next text-success">Next</Link></div>
                        </div>

                        <div className="nonloop-block-16 owl-carousel">

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Randall Guzman</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  10th grade</span>
                              <span className="d-block"><span className="icon-room" />  America</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Emilee Mayer</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  11th grade</span>
                              <span className="d-block"><span className="icon-room" />  America</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Brayden Hines</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  12th grade</span>
                              <span className="d-block"><span className="icon-room" />  Canada</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Petra Mays</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  11th grade</span>
                              <span className="d-block"><span className="icon-room" />  Spain</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>

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
