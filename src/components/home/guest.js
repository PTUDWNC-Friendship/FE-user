import React from 'react';

import Header from '../header/header';

class Guest extends React.Component {


    render() {
        return (
            <div>
            <div className="site-wrap">
                <div className="site-mobile-menu">
                  <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                      <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                  </div>
                  <div className="site-mobile-menu-body"></div>
                </div>

                <Header/>

                <div style={{height: "113px"}}></div>

                <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('images/tutor-1.jpg')"}}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12" data-aos="fade">
                        <h1>Find Tutor</h1>
                        <form action="#">
                          <div className="row mb-3">
                            <div className="col-md-9">
                              <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                  <input type="text" className="mr-3 form-control border-0 px-4" placeholder="subject, tutor name or tutor title "></input>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                  <div className="input-wrap">
                                    <span className="icon icon-room"></span>
                                  <input type="text" className="form-control form-control-block search-input  border-0 px-4" id="autocomplete" placeholder="city, province or region" onFocus="geolocate()"></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <input type="submit" className="btn btn-search btn-success btn-block" value="Search"></input>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <p className="small">or browse by subject category down below</p>
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="site-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                        <h2 className="mb-5">Categories</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="100">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/calculator.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Math</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="200">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/study.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Literature</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="300">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/dna.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Biology</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="400">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/translate.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Languages</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="500">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/global.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Geography</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="600">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/atom.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Physics</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="700">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/chemistry.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">Chemistry</span>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="800">
                        <a href="#" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" src="images/history.svg"></img>
                          </span>
                          <h2> </h2>
                          <span className="counting">History</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>


                <div className="site-section bg-light">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="mb-5 h3">Recent Tutors</h2>
                        <div className="rounded border jobs-wrap">

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Restaurant Crew</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span> Resto Bar</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span> Florida</div>
                                  <div><span className="icon-money mr-1"></span> $55000 &mdash; 70000</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-info p-2 rounded border border-info">Full Time</span>
                              </div>
                            </div>
                          </a>

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/logo_1.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>JavaScript Fullstack Developer</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span> Cooper</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span> Anywhere</div>
                                  <div><span className="icon-money mr-1"></span> $55000 &mdash; 70000</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-warning p-2 rounded border border-warning">Freelance</span>
                              </div>
                            </div>
                          </a>


                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/logo_1.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>ReactJS Fullstack Developer</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span> Cooper</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span> Anywhere</div>
                                  <div><span className="icon-money mr-1"></span> $55000 &mdash; 70000</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-warning p-2 rounded border border-warning">Freelance</span>
                              </div>
                            </div>
                          </a>


                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center fulltime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Assistant Brooker, Real Estate</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span> RealState</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span> New York</div>
                                  <div><span className="icon-money mr-1"></span> $55000 &mdash; 70000</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-info p-2 rounded border border-info">Full Time</span>
                              </div>
                            </div>
                          </a>

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center partime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/logo_2.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Telecommunication Manager</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span> Think</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span> London</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-danger p-2 rounded border border-danger">Par Time</span>
                              </div>
                            </div>
                          </a>


                        </div>

                        <div className="col-md-12 text-center mt-5">
                          <a href="#" className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle"></span> Show More Jobs</a>
                        </div>
                      </div>
                      <div className="col-md-4 block-16" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex mb-0">
                          <h2 className="mb-5 h3 mb-0">Most Hired</h2>
                          <div className="ml-auto mt-1"><a href="#" className="owl-custom-prev text-success">Prev</a> / <a href="#" className="owl-custom-next text-success">Next</a></div>
                        </div>

                        <div className="nonloop-block-16 owl-carousel">

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Randall Guzman</h2>
                            <p><span className="border border-warning rounded p-1 px-2 text-warning">Freelance</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span> Resto Bar</span>
                              <span className="d-block"><span className="icon-room"></span> Florida</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $55000 &mdash; 70000</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Emilee Mayer</h2>
                            <p><span className="border border-warning rounded p-1 px-2 text-warning">Freelance</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span> Resto Bar</span>
                              <span className="d-block"><span className="icon-room"></span> Florida</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $55000 &mdash; 70000</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Brayden Hines</h2>
                            <p><span className="border border-warning rounded p-1 px-2 text-warning">Freelance</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span> Resto Bar</span>
                              <span className="d-block"><span className="icon-room"></span> Florida</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $55000 &mdash; 70000</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Petra Mays</h2>
                            <p><span className="border border-warning rounded p-1 px-2 text-warning">Freelance</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase"></span> Resto Bar</span>
                              <span className="d-block"><span className="icon-room"></span> Florida</span>
                              <span className="d-block"><span className="icon-money mr-1"></span> $55000 &mdash; 70000</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>




                <div className="site-blocks-cover overlay inner-page" style={{backgroundImage: "url('images/tutor-1.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6 text-center" data-aos="fade">
                        <h1 className="h3 mb-0">Your Kid's Future</h1>
                        <p className="h3 text-white mb-5">Is Waiting Ahead</p>
                        <p><a href="#" className="btn btn-outline-warning py-3 px-4">Find Tutors</a> <a href="#" className="btn btn-warning py-3 px-4">Apply For A Tutor</a></p>

                      </div>
                    </div>
                  </div>
                </div>



                <div className="site-section site-block-feature bg-light">
                  <div className="container">

                    <div className="text-center mb-5 section-heading">
                      <h2>Why Choose Us</h2>
                    </div>

                    <div className="d-block d-md-flex border-bottom">
                      <div className="text-center p-4 item border-right" data-aos="fade">
                        <span className="flaticon-worker display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">More Jobs Every Day</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                      <div className="text-center p-4 item" data-aos="fade">
                        <span className="flaticon-wrench display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Creative Jobs</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                    </div>
                    <div className="d-block d-md-flex">
                      <div className="text-center p-4 item border-right" data-aos="fade">
                        <span className="flaticon-stethoscope display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Healthcare</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                      <div className="text-center p-4 item" data-aos="fade">
                        <span className="flaticon-calculator display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Finance &amp; Accounting</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="site-section block-15">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                        <h2>Browse our highest-rated tutors</h2>
                      </div>
                    </div>


                    <div className="nonloop-block-15 owl-carousel">


                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#" className="text-success">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_2.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#" className="text-success">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_3.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#" className="text-success">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#" className="text-success">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_2.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_3.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_2.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/img_3.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#">Jobs are made easy</a></h2>
                          <span className="mb-3 d-block post-date">January 20, 2018 &bullet; By <a href="#">Josh Holmes</a></span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.</p>
                        </div>
                    </div>

                    <div className="row">

                    </div>
                  </div>
                </div>




                <footer className="site-footer">
                  <div className="container">


                    <div className="row">
                      <div className="col-md-4">
                        <h3 className="footer-heading mb-4 text-white">About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
                        <p><a href="#" className="btn btn-success pill text-white px-4">Read More</a></p>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                              <ul className="list-unstyled">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Approach</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Careers</a></li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                            <h3 className="footer-heading mb-4 text-white">Categories</h3>
                              <ul className="list-unstyled">
                                <li><a href="#">Full Time</a></li>
                                <li><a href="#">Freelance</a></li>
                                <li><a href="#">Temporary</a></li>
                                <li><a href="#">Internship</a></li>
                              </ul>
                          </div>
                        </div>
                      </div>


                      <div className="col-md-2">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                          <div className="col-md-12">
                            <p>
                              <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                              <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                              <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                              <a href="#" className="p-2"><span className="icon-vimeo"></span></a>

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

export default Guest;
