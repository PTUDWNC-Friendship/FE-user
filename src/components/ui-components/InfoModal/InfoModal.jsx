
import React, { Component } from "react";



export class InfoModal extends Component {
  render() {


    return (
      <div className="card card-user" style={{marginBottom: '3%'}}>
      {/* -------Modal--------- */}
                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">


                      <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>


                      <div className="modal-body">
                        Modal body..
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
