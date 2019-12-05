import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
          <div class="wrap">
            <div class="header">
              <div class="logo">
                <h1>
                  <p href="#">Ohh</p>
                </h1>
              </div>
            </div>
            <div class="content">
              <image src="images/error-img.png" title="error" />
              <p>
                <span>
                  <label>O</label>hh.....
                </span>
                You Requested the page that is no longer There.
              </p>
              <Link to="/" className="btn btn-danger">Back To Home</Link>
              <div class="copy-right">
                <p>
                  &copy; 2013 Ohh. All Rights Reserved | Design by{" "}
                  <a href="http://w3layouts.com/">W3Layouts</a>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default NotFound;