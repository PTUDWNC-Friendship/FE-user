import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, authorizeUser, fetchAllTutors, fetchAllStudents } from '../../actions/user';
class Student extends React.Component {

  componentDidMount() {
    const { userState, history, getListTutors, getListStudents } = this.props;
    getListTutors();
    getListStudents();
    if (userState.user !== null) {
      if (userState.user.role === 'tutor') {
        history.push('/home-tutor');
      }
    }
  }

    render() {
      const { userState } = this.props;
        return (
            <div>
            <div className="site-wrap">


                <div style={{height: "113px"}} />

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
                                  <input type="text" className="mr-3 form-control border-0 px-4" placeholder="subject, tutor name or tutor title " />
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                  <div className="input-wrap">
                                    <span className="icon icon-room" />
                                  <input type="text" className="form-control form-control-block search-input  border-0 px-4" id="autocomplete" placeholder="city, province or region" onFocus="geolocate()" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <input type="submit" className="btn btn-search btn-success btn-block" value="Search" />
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
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/calculator.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Math</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="200">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/study.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Literature</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="300">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/dna.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Biology</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="400">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/translate.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Languages</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="500">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/global.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Geography</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="600">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/atom.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Physics</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="700">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/chemistry.svg" />
                          </span>
                          <h2> </h2>
                          <span className="counting">Chemistry</span>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="800">
                        <Link to="/" className="h-100 feature-item">
                          <span className="d-block icon mb-3">
                            <img width="90" height="90" alt="" src="images/history.svg" />
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
                      <div className="col-md-8 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="mb-5 h3">All Tutors</h2>
                        <div className="rounded border jobs-wrap">

                        <div className="rounded border jobs-wrap">
                    {userState.allTutors.map(element => (
                      <Link
                        to="/list-tutors"
                        className="job-item d-block d-md-flex align-items-center  border-bottom fulltime"
                      >
                        <div className="company-logo blank-logo text-center text-md-left pl-3">
                          <img
                            src={element !== null ? element.imageURL : ''}
                            alt=""
                            className="img-fluid mx-auto"
                          />
                        </div>
                        <div className="job-details h-100">
                          <div className="p-3 align-self-center">
                            <h3>
                              {element !== null ? element.firstName : ''}
                              {element !== null ? element.lastName : ''}
                            </h3>
                            <div className="d-block d-lg-flex">
                              <div className="mr-3">
                                <span className="icon-suitcase mr-1" /> Tutor
                              </div>
                              <div className="mr-3">
                                <span className="icon-room mr-1" />
                                { element !== null ? element.address : '' }
                              </div>
                              <div>
                                <span className="icon-money mr-1" />$
                                {element !== null ? element.price : '0'} per
                                hour
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job-category align-self-center">
                          <div className="p-3">
                            <span className="text-info p-2 rounded border border-info">
                              100% Trusted
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                        </div>

                        <div className="col-md-12 text-center mt-5">
                          <Link to="/" className="btn btn-success rounded py-3 px-5"><span className="icon-plus-circle" /> Load More</Link>
                        </div>
                      </div>
                      <div className="col-md-4 block-16" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex mb-0">
                          <h2 className="mb-5 h3 mb-0">Recent Hired</h2>
                          <div className="ml-auto mt-1"><Link to="/" className="owl-custom-prev text-success">Prev</Link> / <Link to="/" className="owl-custom-next text-success">Next</Link></div>
                        </div>

                        <div className="nonloop-block-16 owl-carousel">

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Randall Guzman</h2>
                            <p><span className="text-info p-2 rounded border border-info">90% Trusted</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  Math Teacher</span>
                              <span className="d-block"><span className="icon-room" />  America</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Emilee Mayer</h2>
                            <p><span className="text-info p-2 rounded border border-info">90% Trusted</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  Chemistry Teacher</span>
                              <span className="d-block"><span className="icon-room" />  America</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Prof. Brayden Hines</h2>
                            <p><span className="text-info p-2 rounded border border-info">90% Trusted</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  Literature Teacher</span>
                              <span className="d-block"><span className="icon-room" />  Canada</span>
                              <span className="d-block"><span className="icon-money mr-1" /> $30 per hour</span>
                            </p>
                            <p className="mb-0">I am a good tutor</p>
                          </div>

                          <div className="border rounded p-4 bg-white">
                            <h2 className="h5">Dr. Petra Mays</h2>
                            <p><span className="text-info p-2 rounded border border-info">90% Trusted</span></p>
                            <p>
                              <span className="d-block"><span className="icon-suitcase" />  Spanish Teacher</span>
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
                    <div className="row">
                      <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                        <h2>Browse our highest-rated tutors</h2>
                      </div>
                    </div>


                    <div className="nonloop-block-15 owl-carousel">

                      
                        <div className="media-with-text">
                          <div className="image-border-sm mb-4">
                            <Link to="/" className="image-play">
                              <img src="images/person_1.jpg" alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <h2 className="heading mb-0 h5"><Link to="/" className="text-success">Tina Galloway</Link></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1" />Math Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1" />Viet Nam</div>
                          <div><span className="icon-money mr-1" />$15 per hour</div>
                        </div>

                        <div className="media-with-text">
                          <div className="img-border-sm mb-4">
                            <Link to="/" className="image-play">
                              <img src="images/person_3.jpg" alt="" className="img-fluid" />
                            </Link>
                          </div>
                          <h2 className="heading mb-0 h5"><Link to="/" className="text-success">Johnathon Estes</Link></h2>
                          <div className="mr-3"><span className="icon-suitcase mr-1" />Biology Teacher</div>
                          <div className="mr-3"><span className="icon-room mr-1" />Canada</div>
                          <div><span className="icon-money mr-1" />$15 per hour</div>
                        </div>

                        {/* {userState.allTutors.map(element=>(

                                                  <div className="media-with-text">
                                                  <div className="image-border-sm mb-4">
                                                    <Link to="/" className="image-play">
                                                      <img src="images/person_1.jpg" alt="" className="img-fluid" />
                                                    </Link>
                                                  </div>
                                                  <h2 className="heading mb-0 h5"><Link to="/" className="text-success">{element.firstName+ ' ' + element.lastName}</Link></h2>
                                                  <div className="mr-3"><span className="icon-suitcase mr-1" />Math Teacher</div>
                                                  <div className="mr-3"><span className="icon-room mr-1" />Viet Nam</div>
                                                  <div><span className="icon-money mr-1" />$15 per hour</div>
                                                </div>

                        ))}   */}



                    </div>
                  </div>
                </div>



                {/* <div className="site-section site-block-feature bg-light">
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
                </div> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Student));

