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
import { Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export class TutorCard extends Component {
  render() {

    const alerts = [];
    for (let i = 0; i < this.props.subjects.length; i+=1) {
      alerts.push(
        <Alert style={{float:'left', padding: '1.5%', marginLeft: '3%'}}>{this.props.subjects[0]}</Alert>
      );
    }
    console.log(this.props.subjects.length);

    return (
      <div  className="card card-user" style={{marginBottom: '3%'}}>
        <div className="content" style={{width: '100%'}}>
          <div className='align-items-center' style={{width: '50%', float: 'left'}}>
          <Image
            className="avatar border-gray"
            src={this.props.avatar}
            alt="..."
          />
          </div>

          <div className='text-left' style={{marginLeft: '50%'}}>
            <Link to='/' style={{color: 'green'}}>{this.props.name}<br/></Link>
            <p>{this.props.title}</p>
            <p><strong>${this.props.price}</strong> per hour</p>
            <p>{this.props.address}</p>

          </div>

          <hr />

          <small>{alerts}</small>

        </div>

        <hr/>
        <div className="text-center">{this.props.rate}</div>
      </div>
    );
  }
}

export default TutorCard;
