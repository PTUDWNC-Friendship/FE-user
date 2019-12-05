import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

class NotFound extends Component {
  render() {
    return (
      <div class="wrap bg-dark">
        <div class="content">
          <div style={{textAlign: "center", paddingTop: "200px"}}>
            <img src="images/error-img.png" alt="" title="error" />
            <div className="mt-5">
              <Link to="/" className="btn btn-danger mb-5">
                <Icon type="home" /> Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
