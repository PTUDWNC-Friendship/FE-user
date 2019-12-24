
import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class StudentCard extends Component {

  redirectToContracts()
  {
    window.location.href='/contracts-tutor';
  }

  render() {


    return (
      <div className="card card-user" style={{marginBottom: '3%'}}>
      {/* -------Modal--------- */}
                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">


                      <div className="modal-header">
                        <h4 className="modal-title">Student Information</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>


                      <div className="modal-body">
                      <div className="card card-user" style={{marginBottom: '3%'}}>
                        <div className="content" >
                          <div className='text-center'>
                          <Image
                            id="imgModal"
                            className="avatar border-gray"
                            src=''
                            alt="..."
                          />
                          <br/>
                          <strong id="nameModal" style={{color: 'green'}}><br/></strong>
                          </div>

                          <div>

                            <p id="genderModal"/>
                            <p><strong id="addressModal"/></p>
                            <div>
                            <p id="phoneModal"/>
                            </div>
                          </div>
                          <div>
                          <p id="bioModal"/>
                          </div>

                        </div>

                      </div>
                      </div>


                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal"
                                onClick={() => this.redirectToContracts()}>
                          See Contracts
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
      {/*------------------*/}
      </div>
    );
  }
}

export default StudentCard;
