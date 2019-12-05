import React from 'react';
import { Link } from "react-router-dom";

class Tutor extends React.Component {
    render() {
        return (
            <div>
            <div className="site-wrap">


                <div style={{height: "113px"}}></div>

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
                              <image src="images/person_2.jpg" alt="Image" className="img-fluid mx-auto"></image>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Stephanie Croft</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>10th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
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
                              <image src="images/person_1.jpg" alt="Image" className="img-fluid mx-auto"></image>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Tina Galloway</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>11th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>Viet Nam</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
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
                              <image src="images/person_3.jpg" alt="Image" className="img-fluid mx-auto"></image>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Johnathon Estes</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>10th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>Canada</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
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
                              <image src="images/person_4.jpg" alt="Image" className="img-fluid mx-auto"></image>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Derrick Walls</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>11th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
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
                              <image src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto"></image>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Frank Ridley</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>12th grade</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
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
                          <Link to="/" className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle"></span> Load More</Link>
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
                              <span className="d-block"><span className="icon-suitcase"></span>  10th grade</span>
                              <span className="d-block"><span className="icon-room"></span>  America</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Emilee Mayer</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span>  11th grade</span>
                              <span className="d-block"><span className="icon-room"></span>  America</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Brayden Hines</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span>  12th grade</span>
                              <span className="d-block"><span className="icon-room"></span>  Canada</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Petra Mays</h2>
                            <p><span className="text-info p-2 rounded border border-info">80% Contract</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span>  11th grade</span>
                              <span className="d-block"><span className="icon-room"></span>  Spain</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $30 per hour</span>
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
                      <span className="flaticon-worker display-3 mb-3 d-block text-success"></span>
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small"></span></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-wrench display-3 mb-3 d-block text-success"></span>
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small"></span></Link></p>
                    </div>
                  </div>
                  <div className="d-block d-md-flex">
                    <div className="text-center p-4 item border-right" data-aos="fade">
                      <span className="flaticon-stethoscope display-3 mb-3 d-block text-success"></span>
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small"></span></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-calculator display-3 mb-3 d-block text-success"></span>
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small"></span></Link></p>
                    </div>
                  </div>
                  </div>
                </div>





                <footer className="site-footer">
                  <div className="container">


                    <div className="row">
                      <div className="col-md-4">
                        <h3 className="footer-heading mb-4 text-white">About</h3>
                        <p>Will Be Updated</p>
                        <p><Link to="/" className="btn btn-success pill text-white px-4">Read More</Link></p>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                              <ul className="list-unstyled">
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Approach</Link></li>
                                <li><Link to="/">Sustainability</Link></li>
                                <li><Link to="/">News</Link></li>
                                <li><Link to="/">Careers</Link></li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Categories</h3>
                              <ul className="list-unstyled">
                                <li><Link to="/">Will Be Updated</Link></li>
                                <li><Link to="/">Will Be Updated</Link></li>
                                <li><Link to="/">Will Be Updated</Link></li>
                                <li><Link to="/">Will Be Updated</Link></li>
                              </ul>
                          </div>
                        </div>
                      </div>


                      <div className="col-md-2">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                          <div className="col-md-12">
                            <p>
                              <Link to="/" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></Link>
                              <Link to="/" className="p-2"><span className="icon-twitter"></span></Link>
                              <Link to="/" className="p-2"><span className="icon-instagram"></span></Link>
                              <Link to="/" className="p-2"><span className="icon-vimeo"></span></Link>

                            </p>
                          </div>
                      </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                      <div className="col-md-12">

                      </div>

                    </div>
                  </div>
                </footer>
              </div>
            </div>
        );
    }
}

export default Tutor;
