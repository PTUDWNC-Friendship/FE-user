/* eslint-disable react/no-unused-state */
import React from 'react';
import firebase from 'firebase';
import './chat.css';

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: 'Nguyen Duy Hau',
            message: '',
            list: [],
          };

        this.messageRef = firebase.database().ref().child('messages');

        this.listenMessages();
    }
    
    componentDidUpdate() {
        

      }


      handleChange(event) {
        this.setState({message: event.target.value});
      }
      
      handleSend() {
        if (this.state.message) {

          const newItem = {
            userName: this.state.userName,
            message: this.state.message
          };

          this.messageRef.push(newItem);
          this.setState({ message: '' });
        }
      }

      handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
      }

    listenMessages() {
        this.messageRef
          .limitToLast(10)
          .on('value', message => {
            this.setState({
                list: Object.values(message.val()),
              });
          });
      }

    render() {

        return (
            <div className="container " style={{paddingTop: '114px'}}>
                <h3 className=" text-center">Messaging</h3>
                <div className="messaging">
                  <div className="inbox_msg">
                    <div className="inbox_people">
                      <div className="headind_srch">
                        <div className="recent_heading">
                          <h4>Recent</h4>
                        </div>
                        <div className="srch_bar">
                          <div className="stylish-input-group">
                            <input type="text" className="search-bar"  placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                            </span> 
                            </div>
                        </div>
                      </div>
                      <div className="inbox_chat">
                        <div className="chat_list active_chat">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat_list">
                          <div className="chat_people">
                            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                            <div className="chat_ib">
                              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                              <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mesgs">
                      <div className="msg_history">
                      { this.state.list.map((item) =>

                        <div className="incoming_msg">
                        <div className="incoming_msg_img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> 
                        </div>
                        <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>{item.message}</p> 
                            <span className="time_date"> 11:01 AM    |    June 9</span></div>
                        </div>
                        </div>

                        )} 
                        <div className="outgoing_msg">
                          <div className="sent_msg">
                            <p>Test which is a new approach to have all
                              solutions</p>
                            <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                        </div>


                      </div>
                      <div className="type_msg">
                        <div className="input_msg_write">
                          <input type="text" className="write_msg" value={this.state.message}  onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} placeholder="Type a message" />
                          <button className="msg_send_btn"  onClick={this.handleSend.bind(this)} type="button"> <i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <p className="text-center top_spac"> Design by <a target="_blank" href="javascript;">Sunil Rajput</a></p>
                  
                </div>
            </div>
        );
    }
}


export default Chat;
