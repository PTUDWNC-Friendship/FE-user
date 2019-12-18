import React from 'react';

import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, authorizeUser, fetchAllTutors, fetchAllStudents } from '../../actions/user';
import ListTutor from './list-tutors';

class Guest extends React.Component {
  componentDidMount() {
    const { userState, history, getListTutors, getListStudents } = this.props;
    getListTutors();
    getListStudents();
    if (userState.user !== null) {
      if (userState.user.role === 'student') {
        history.push('/home-student');
      } else if (userState.user.role === 'tutor') {
        history.push('/home-tutor');
      }
    }
  }

  render() {
    const { userState } = this.props;
    if(userState.allStudents.length>0) {
      console.log(userState.allStudents);
    }
    return (
      <div>
        <div className="site-wrap">
          <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>

          <div style={{ height: '113px' }} />

          <div
            className="site-blocks-cover overlay"
            data-aos="fade"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url('images/tutor-1.jpg')" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12" data-aos="fade">
                  <h1>Find Tutor</h1>
                  <form action="#">
                    <div className="row mb-3">
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <input
                              type="text"
                              className="mr-3 form-control border-0 px-4"
                              placeholder="subject, tutor name or tutor title "
                            />
                          </div>
                          <div className="col-md-6 mb-3 mb-md-0">
                            <div className="input-wrap">
                              <span className="icon icon-room" />
                              <input
                                type="text"
                                className="form-control form-control-block search-input  border-0 px-4"
                                id="autocomplete"
                                placeholder="city, province or region"
                                onFocus="geolocate()"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <input
                          type="submit"
                          className="btn btn-search btn-success btn-block"
                          value="Search"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="small">
                          or browse by subject category down below
                        </p>
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
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/calculator.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Math</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/study.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Literature</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img width="90" height="90" alt="" src="images/dna.svg" />
                    </span>
                    <h2> </h2>
                    <span className="counting">Biology</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/translate.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Languages</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/global.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Geography</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/atom.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Physics</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/chemistry.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">Chemistry</span>
                  </Link>
                </div>
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-3"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <Link to="/" className="h-100 feature-item">
                    <span className="d-block icon mb-3">
                      <img
                        width="90"
                        height="90"
                        alt=""
                        src="images/history.svg"
                      />
                    </span>
                    <h2> </h2>
                    <span className="counting">History</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-light">
            <div className="container">
              <div className="row">
                <ListTutor allTutors={userState.allTutors} />
                <div
                  className="col-md-4 block-16"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
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
          </div>

          <div
            className="site-blocks-cover overlay inner-page"
            style={{ backgroundImage: "url('images/tutor-1.jpg')" }}
            data-aos="fade"
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-center" data-aos="fade">
                  <h1 className="h3 mb-0">Your Future</h1>
                  <p className="h3 text-white mb-5">Is Waiting Ahead</p>
                  <p>
                    <Link
                      to="/register"
                      className="btn btn-outline-warning py-3 px-4"
                    >
                      Find Tutors
                    </Link>
                    <p />
                    <Link to="/register" className="btn btn-warning py-3 px-4">
                      Apply For A Tutor
                    </Link>
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
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Tina Galloway
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    Math Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    Viet Nam
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Stephanie Croft
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    English Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    America
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Johnathon Estes
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    Biology Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    Canada
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Tina Galloway
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    Math Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    Viet Nam
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Stephanie Croft
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    English Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    America
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Johnathon Estes
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    Biology Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    Canada
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
                </div>

                <div className="media-with-text">
                  <div className="img-border-sm mb-4">
                    <Link to="/" className="image-play">
                      <img
                        src="images/person_1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h2 className="heading mb-0 h5">
                    <Link to="/" className="text-success">
                      Tina Galloway
                    </Link>
                  </h2>
                  <div className="mr-3">
                    <span className="icon-suitcase mr-1" />
                    Math Teacher
                  </div>
                  <div className="mr-3">
                    <span className="icon-room mr-1" />
                    Viet Nam
                  </div>
                  <div>
                    <span className="icon-money mr-1" />
                    $15 per hour
                  </div>
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
                <div
                  className="text-center p-4 item border-right"
                  data-aos="fade"
                >
                  <span className="flaticon-worker display-3 mb-3 d-block text-success" />
                  <h2 className="h4">Will Be Updated</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
                  </p>
                  <p>
                    <Link to="/" className="text-success">
                      Read More <span className="icon-arrow-right small" />
                    </Link>
                  </p>
                </div>
                <div className="text-center p-4 item" data-aos="fade">
                  <span className="flaticon-wrench display-3 mb-3 d-block text-success" />
                  <h2 className="h4">Will Be Updated</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
                  </p>
                  <p>
                    <Link to="/" className="text-success">
                      Read More <span className="icon-arrow-right small" />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="d-block d-md-flex">
                <div
                  className="text-center p-4 item border-right"
                  data-aos="fade"
                >
                  <span className="flaticon-stethoscope display-3 mb-3 d-block text-success" />
                  <h2 className="h4">Will Be Updated</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
                  </p>
                  <p>
                    <Link to="/" className="text-success">
                      Read More <span className="icon-arrow-right small" />
                    </Link>
                  </p>
                </div>
                <div className="text-center p-4 item" data-aos="fade">
                  <span className="flaticon-calculator display-3 mb-3 d-block text-success" />
                  <h2 className="h4">Will Be Updated</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
                  </p>
                  <p>
                    <Link to="/" className="text-success">
                      Read More <span className="icon-arrow-right small" />
                    </Link>
                  </p>
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
                  <p>
                    <Link
                      to="/"
                      className="btn btn-success pill text-white px-4"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="footer-heading mb-4 text-white">
                        Quick Menu
                      </h3>
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/">About</Link>
                        </li>
                        <li>
                          <Link to="/">Services</Link>
                        </li>
                        <li>
                          <Link to="/">Approach</Link>
                        </li>
                        <li>
                          <Link to="/">Sustainability</Link>
                        </li>
                        <li>
                          <Link to="/">News</Link>
                        </li>
                        <li>
                          <Link to="/">Careers</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 className="footer-heading mb-4 text-white">
                        Categories
                      </h3>
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/">Will Be Updated</Link>
                        </li>
                        <li>
                          <Link to="/">Will Be Updated</Link>
                        </li>
                        <li>
                          <Link to="/">Will Be Updated</Link>
                        </li>
                        <li>
                          <Link to="/">Will Be Updated</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4 text-white">
                      Social Icons
                    </h3>
                  </div>
                  <div className="col-md-12">
                    <p>
                      <Link to="/" className="pb-2 pr-2 pl-0">
                        <span className="icon-facebook" />
                      </Link>
                      <Link to="/" className="p-2">
                        <span className="icon-twitter" />
                      </Link>
                      <Link to="/" className="p-2">
                        <span className="icon-instagram" />
                      </Link>
                      <Link to="/" className="p-2">
                        <span className="icon-vimeo" />
                      </Link>
                    </p>
                  </div>
                </div>d
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginAction: login,
      authorizeUserAction: authorizeUser,
      getListTutors: fetchAllTutors,
      getListStudents: fetchAllStudents
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Guest));
