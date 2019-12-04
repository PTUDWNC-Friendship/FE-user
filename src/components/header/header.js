import React from 'react';

class Header extends React.Component {


    render() {
        return (
          <div className="site-navbar-wrap js-site-navbar bg-white">
            <div className="container">
              <div className="site-navbar bg-light">
                <div className="py-1 bg-white">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <h2 className="mb-0 site-logo"><a href="index.html">Tutor<strong className="font-weight-bold">Finder</strong> </a></h2>
                    </div>
                    <div className="col-10">
                      <nav className="site-navigation text-right" role="navigation">
                        <div className="container">
                          <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                          <ul className="site-menu js-clone-nav d-none d-lg-block">
                            <li><a href="categories.html">For Candidates</a></li>
                            <li className="has-children">
                              <a href="category.html">For Employees</a>
                              <ul className="dropdown arrow-top">
                                <li><a href="category.html">Category</a></li>
                                <li><a href="#">Browse Candidates</a></li>
                                <li><a href="new-post.html">Post a Job</a></li>
                                <li><a href="#">Employeer Profile</a></li>
                                <li className="has-children">
                                  <a href="#">More Links</a>
                                  <ul className="dropdown">
                                    <li><a href="#">Browse Candidates</a></li>
                                    <li><a href="#">Post a Job</a></li>
                                    <li><a href="#">Employeer Profile</a></li>
                                  </ul>
                                </li>

                              </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="new-post.html"><span className="bg-success text-white py-3 px-4 rounded"><span className="icon-plus mr-3"></span>Post New Job</span></a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Header;
