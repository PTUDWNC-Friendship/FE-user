
import React, { Component } from "react";
import { Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class InfoModal extends Component {
  render() {
    const alerts = [];
    for (let i = 0; i < this.props.subjects.length; i+=1) {
      alerts.push(
        <Alert style={{float:'left', padding: '1.5%', marginLeft: '3%'}}>{this.props.subjects[0]}</Alert>
      );
    }

    return (
      <div className="card card-user" style={{marginBottom: '3%'}}>
      {/* -------Modal--------- */}
                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">


                      <div className="modal-header">
                        <h4 className="modal-title">Tutor Information</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>


                      <div className="modal-body">
                      <div className="card card-user" style={{marginBottom: '3%'}}>
                        <div className="content" style={{width: '100%'}}>
                          <div className='align-items-center' style={{width: '50%', float: 'left'}}>
                          <Image
                            className="avatar border-gray"
                            src={this.props.avatar}
                            alt="..."
                          />
                          </div>

                          <div style={{marginLeft: '50%'}}>
                            <Link to='/' style={{color: 'green'}}>{this.props.name}<br/></Link>
                            <p>{this.props.title}</p>
                            <p><strong>${this.props.price}</strong> per hour</p>
                            <p>{this.props.address}</p>

                          </div>

                          <p>{this.props.bio}</p>

                          <hr />

                          <small>{alerts}</small>

                        </div>

                        <hr/>
                        <div className="text-center">{this.props.rate}</div>
                      </div>
                      </div>


                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
      {/*------------------*/}
      </div>
    );
  }
}

export default InfoModal;
