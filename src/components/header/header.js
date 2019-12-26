import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorizeUser } from '../../actions/user';

class Header extends React.Component {
  componentDidMount() {
    this.props.authorizeUserAction();
  }

  render() {
    const { userState } = this.props;

    return (
      <div>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <div className="site-navbar-wrap js-site-navbar bg-white">
          <div>
            <div className="site-navbar bg-light">
              <div className="py-1 bg-white">
                <div className="row align-items-center">
                  <div className="col-2">
                    <h2
                      className="mb-0 site-logo"
                      style={{ paddingLeft: '20%' }}
                    >
                      <Link to="/">
                        Tutor
                        <strong className="font-weight-bold">
                          Finder
                        </strong>{' '}
                      </Link>
                    </h2>
                  </div>
                  <div className="col-10">
                    <nav
                      className="site-navigation text-right"
                      role="navigation"
                    >
                      <div>
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                          <Link
                            to="/"
                            className="site-menu-toggle js-menu-toggle text-black"
                          >
                            <span className="icon-menu h3" />
                          </Link>
                        </div>

                        {/* USER NULL ======== */}
                        {userState.user === null ? (
                          <ul
                            className="site-menu js-clone-nav d-none d-lg-block"
                            style={{ paddingRight: '3%' }}
                          >
                            <li>
                              <Link to="/list-tutors">Find Tutors</Link>
                            </li>
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                            <li>
                              <Link to="/register">Register</Link>
                            </li>
                          </ul>
                        ) :
                        (
                          <ul className="site-menu js-clone-nav d-none d-lg-block" style={{ paddingRight: '5%' }} > {/* USER LOGED IN ======== */}
                            {/* FIND TUTOR (STUDENT) ======== */}
                            {userState.user.role === 'student' ? (
                              <li>
                                <Link to="/list-tutors">Find Tutors</Link>
                              </li>
                            ) : null}
                            {userState.user.role === 'tutor' ? (
                              <>
                                <li>
                                  <Link to="/list-tutors">Tutors</Link>
                                </li>
                                <li>
                                  <Link to="/analysis">Analysis</Link>
                                </li>
                                <li>
                                  <Link to="/list-students">My Students</Link>
                                </li>
                              </>
                            ) : null}

                            {/* ACCOUNT (USER) ======== */}
                            <li className="has-children">
                              <Link to="/">Account</Link>
                              {/* USER WAS VERIFIED & CHOOSED ROLE ======== */}
                              {userState.user.role &&
                              userState.user.status !== 'notverified' ? (
                                <ul className="dropdown arrow-top">
                                  {/* PROFILE (USER) ======== */}
                                  <li>
                                    <Link
                                      to={
                                        userState.user.role === 'tutor'
                                          ? '/profile-tutor'
                                          : '/profile-student'
                                      }
                                    >
                                      Profile
                                    </Link>
                                  </li>
                                  {/* CHAT (USER) ======== */}
                                  <li>
                                    <Link to="/chat">
                                      Messages
                                    </Link>
                                  </li>
                                  {/* SPECIALTIES (TUTOR) ======== */}
                                  {userState.user.role === 'tutor' ? (
                                    <li>
                                      <Link to="specialties-tutor">
                                        Specialties
                                      </Link>
                                    </li>
                                  ) : null}
                                  {/* CONTRACTS (USER) ======== */}
                                  <li>
                                    <Link
                                      to={
                                        userState.user.role === 'tutor'
                                          ? '/contracts-tutor'
                                          : '/contracts-student'
                                      }
                                    >
                                      Contracts
                                    </Link>
                                  </li>
                                  {/* LOGOUT (USER) ======== */}
                                  <li>
                                    <Link to="/logout">Logout</Link>
                                  </li>
                                </ul>
                              ) :
                              (
                                <ul className="dropdown arrow-top"> {/* USER WASN'T CHOOSED ROLE || WASN'T VERIFED ======== */}
                                  <li>
                                    <Link to="/logout">Logout</Link>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
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

const mapDispatchToProps = dispatch => {
  return {
    authorizeUserAction: () => dispatch(authorizeUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
