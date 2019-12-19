
import React, { Component } from "react";
import { Image } from 'react-bootstrap';


export class InfoModal extends Component {
  render() {


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
                            id="imgModal"
                            className="avatar border-gray"
                            src=''
                            alt="..."
                          />
                          </div>

                          <div style={{marginLeft: '50%'}}>
                            <strong id="nameModal" style={{color: 'green'}}><br/></strong>
                            <p id="titleModal"/>
                            <p><strong id="priceModal"/> per hour</p>
                            <div>
                            <p id="addressModal"/>
                            </div>

                          </div>
                          <div>
                          <p id="bioModal"/>
                          </div>

                          <hr />

                           <small id="subjectModal"/>

                        </div>

                        <hr/>
                        <div id="rateModal" className="text-center" /> 
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
