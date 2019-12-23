import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  login,
  authorizeUser,
  fetchAllTutors,
  fetchAllStudents
} from '../../actions/user';
import TutorList from './view-childs/list-tutors';
import Category from './view-childs/category';
import Search from './view-childs/search';

class Student extends React.Component {
  componentDidMount() {
    const { userState, history } = this.props;

    if (userState.user !== null) {
      if (userState.user.status === 'notverified') {
        history.push('/verify');
      } else if (userState.user.role === 'tutor') {
        history.push('/home-tutor');
      }
    }
  }

  render() {
    return (
      <div>
        <div className="site-wrap">
          <div style={{ height: '113px' }} />

          <Search />
          <Category />
          <TutorList />

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Student));
