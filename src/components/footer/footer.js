import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {

    return (
      <div>
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
                      <Link to="/" className="pb-2 pr-2 pl-0"><span className="icon-facebook" /></Link>
                      <Link to="/" className="p-2"><span className="icon-twitter" /></Link>
                      <Link to="/" className="p-2"><span className="icon-instagram" /></Link>
                      <Link to="/" className="p-2"><span className="icon-vimeo" /></Link>

                    </p>
                  </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12" />

            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
