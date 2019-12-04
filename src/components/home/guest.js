import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsLogin, fetchCurrentUser } from '../../actions/user';
import Header from '../header/header';
import $ from 'jquery';

class Guest extends React.Component {

  constructor(props) {
    super(props);
    const {stateLogins, fetchCurrent} = this.props;
    fetchCurrent();
  }

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


                {/*<div className="site-section bg-light">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="mb-5 h3">All Tutors</h2>
                        <div className="rounded border jobs-wrap">

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/person_2.jpg" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Stephanie Croft</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>English Teacher</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-info p-2 rounded border border-info">100% Trusted</span>
                              </div>
                            </div>
                          </a>

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/person_1.jpg" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Tina Galloway</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>Math Teacher</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>Viet Nam</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-warning p-2 rounded border border-warning">85% Trusted</span>
                              </div>
                            </div>
                          </a>


                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center freelance">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/person_3.jpg" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Johnathon Estes</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>Biology Teacher</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>Canada</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-warning p-2 rounded border border-warning">77% Trusted</span>
                              </div>
                            </div>
                          </a>


                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center fulltime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/person_4.jpg" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Derrick Walls</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>Physics Teacher</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-info p-2 rounded border border-info">90% Trusted</span>
                              </div>
                            </div>
                          </a>

                          <a href="job-single.html" className="job-item d-block d-md-flex align-items-center partime">
                            <div className="company-logo blank-logo text-center text-md-left pl-3">
                              <img src="images/company_logo_blank.png" alt="Image" className="img-fluid mx-auto"></img>
                            </div>
                            <div className="job-details h-100">
                              <div className="p-3 align-self-center">
                                <h3>Frank Ridley</h3>
                                <div className="d-block d-lg-flex">
                                  <div className="mr-3"><span className="icon-suitcase mr-1"></span>History Teacher</div>
                                  <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                                  <div><span className="icon-money mr-1"></span>$15 per hour</div>
                                </div>
                              </div>
                            </div>
                            <div className="job-category align-self-center">
                              <div className="p-3">
                                <span className="text-danger p-2 rounded border border-danger">50% Trusted</span>
                              </div>
                            </div>
                          </a>


                        </div>

                        <div className="col-md-12 text-center mt-5">
                          <a href="#" className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle"></span> Load More</a>
                        </div>
                      </div>
                      <div className="col-md-4 block-16" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex mb-0">
                          <h2 className="mb-5 h3 mb-0">Recent Hired</h2>
                        </div>

                        <div className="nonloop-block-16 owl-carousel">

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">You need to login to hire tutors!</h2>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>*/}


                <div className="site-blocks-cover overlay inner-page" style={{backgroundImage: "url('images/tutor-1.jpg')"}} data-aos="fade" data-stellar-background-ratio="0.5">
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6 text-center" data-aos="fade">
                        <h1 className="h3 mb-0">Your Future</h1>
                        <p className="h3 text-white mb-5">Is Waiting Ahead</p>
                        <p>
                          <a href="/register-student" className="btn btn-outline-warning py-3 px-4">Find Tutors</a>
                          <a href="/register-tutor" className="btn btn-warning py-3 px-4">Apply For A Tutor</a>
                        </p>

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
                              <img src="images/person_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Tina Galloway</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>Math Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>Viet Nam</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_2.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Stephanie Croft</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>English Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_3.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Johnathon Estes</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>Biology Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>Canada</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Tina Galloway</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>Math Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>Viet Nam</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_2.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Stephanie Croft</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>English Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>America</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_3.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Johnathon Estes</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>Biology Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>Canada</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <a href="#" className="image-play">
                              <img src="images/person_1.jpg" alt="" className="img-fluid"></img>
                            </a>
                          </div>
                          <h2 className="heading mb-0 h5"><a href="#" className="text-success">Tina Galloway</a></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1"></span>Math Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1"></span>Viet Nam</div>
                          <div><span className="icon-money mr-1"></span>$15 per hour</div>
                        </div>
                    </div>
                  </div>
                </div>



                <div className="site-section site-block-feature bg-light">
                  <div className="container">

                    <div className="text-center mb-5 section-heading">
                      <h2>How does it work?</h2>
                    </div>

                    <div className="d-block d-md-flex border-bottom">
                      <div className="text-center p-4 item border-right" data-aos="fade">
                        <span className="flaticon-worker display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Will Be Updated</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                      <div className="text-center p-4 item" data-aos="fade">
                        <span className="flaticon-wrench display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Will Be Updated</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                    </div>
                    <div className="d-block d-md-flex">
                      <div className="text-center p-4 item border-right" data-aos="fade">
                        <span className="flaticon-stethoscope display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Will Be Updated</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
                      </div>
                      <div className="text-center p-4 item" data-aos="fade">
                        <span className="flaticon-calculator display-3 mb-3 d-block text-success"></span>
                        <h2 className="h4">Will Be Updated</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                        <p><a href="#" className="text-success">Read More <span className="icon-arrow-right small"></span></a></p>
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
                                <li><a href="#">Will Be Updated</a></li>
                                <li><a href="#">Will Be Updated</a></li>
                                <li><a href="#">Will Be Updated</a></li>
                                <li><a href="#">Will Be Updated</a></li>
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


const mapStateToProps = (state) =>{
  return {
  stateLogins: state.login,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSubmit: fetchPostsLogin,
      fetchCurrent: fetchCurrentUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Guest));
