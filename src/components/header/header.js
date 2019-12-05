import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../actions/user';

class Header extends React.Component {

    render() {
      const {stateLogins} = this.props;
      if(stateLogins.user === null) {
        return (
          <div>
          <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          <div  className="site-navbar-wrap js-site-navbar bg-white">
            <div>
              <div className="site-navbar bg-light">
                <div   className="py-1 bg-white">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <h2 className="mb-0 site-logo" style={{paddingLeft: "20%"}}><a href="/">Tutor<strong className="font-weight-bold">Finder</strong> </a></h2>
                    </div>
                    <div className="col-10">
                      <nav className="site-navigation text-right" role="navigation">
                        <div >
                          <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                          <ul className="site-menu js-clone-nav d-none d-lg-block" style={{paddingRight: "3%"}}>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register-student">Register For Student</a></li>
                            <li><a href="/register-tutor">Register For Tutor</a></li>
                          </ul>
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
      return (
        <div>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <div  className="site-navbar-wrap js-site-navbar bg-white">
          <div>
            <div className="site-navbar bg-light">
              <div   className="py-1 bg-white">
                <div className="row align-items-center">
                  <div className="col-2">
                    <h2 className="mb-0 site-logo" style={{paddingLeft: "20%"}}><a href="/">Tutor<strong className="font-weight-bold">Finder</strong> </a></h2>
                  </div>
                  <div className="col-10">
                    <nav className="site-navigation text-right" role="navigation">
                      <div >
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                        <ul className="site-menu js-clone-nav d-none d-lg-block" style={{paddingRight: "3%"}}>
                        <li>
                          <a
                            href="/"
                            onClick={(i) => this.props.logout()}>
                             Logout
                          </a>
                        </li>
                        </ul>
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
const mapStateToProps = (state) =>{
  return {
  stateLogins: state.login
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrent: bindActionCreators(action.fetchCurrentUser,dispatch)
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Header);
