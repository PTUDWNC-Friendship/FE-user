/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import {  Button } from "@material-ui/core";

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="content">
          <div className="author">
            <Button onClick={this.props.onClick} className='align-items-center'>
              <Image
                id ="idImg"
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
            </Button>
            <div>
              <h4 className="title text-center">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
