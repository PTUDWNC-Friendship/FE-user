/* eslint-disable react/no-unused-state */
import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './chat.css';
import { fetchAllStudents, fetchAllTutors } from '../../../actions/user';
import { element } from 'prop-types';

class Chat extends React.Component {

    constructor(props) {
        super(props);

          this.state = {
            userName: '',
            message: '',
            list: [],
            allMessages: [],
            listContacts: [],
          };
          const { userState, getListStudents, getListTutors } = this.props;
          getListStudents();
          getListTutors();
          if(userState.user!==null) {

            this.setState({
              userName: userState.user.firstName + userState.user.lastName
            });
          }
        this.messageRef = firebase.database().ref().child('messages');
        this.listenMessages();
    }
    
    componentDidMount() {


    }


      handleChange(event) {
        this.setState({message: event.target.value});
      }
      
      handleSend() {
        if (this.state.message) {
          const { userState } = this.props;
          const {user} = userState;
          if(user!==null) {
            const newItem = {
              idSender: user._id,
              userName: `${user.firstName  } ${ user.lastName}`,
              message: this.state.message,
              time: (new Date()).toString(),
            };
  
            this.messageRef.push(newItem);
            this.setState({ message: '' });
          }
        }
      }

      handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
      }

    listenMessages() {

      this.messageRef       
          .on('value', message => {
            this.setState({
              allMessages: Object.values(message.val()),
              });
          });

        this.messageRef
          .limitToLast(10)
          .on('value', message => {
            this.setState({
                list: Object.values(message.val()),
              });
          });
      }
    
      getMessageLatestUser(idSender) {
      const sortArray = this.state.allMessages;
      sortArray.sort(function(a,b){
        return new Date(b.date + " "+b.time) - new Date(a.date + " "+a.time);           
        });
      console.log(sortArray);
      
      for(let i = 0 ; i<sortArray.length;i++) {
        if(!sortArray[i].hasOwnProperty('time')) {
          sortArray.splice(i,1);
          i--;
       
        }
      }
      let latestMsg = {message: '', time: ''};

    // Sua lai thanh for thuong
      sortArray.forEach(element=>{

        if(idSender===element.idSender) {
          latestMsg.message = element.message;
          latestMsg.time = element.time;
         element.stop=true;

        }
      })
      return latestMsg;
      }
    
    

    render() {
      const { userState } = this.props;
      const {user, allStudents, allTutors} = userState;
      let userName = null;
      let listContacts = [];
      if(user!==null) {
        userName = `${user.firstName  } ${ user.lastName}`;
        if(allStudents.length>0) {
          // listContacts = user.role==='tutor'?allStudents:allTutors;
          if(user.role==='tutor') {
            
           
            allStudents.forEach(element => {
              const latestMsg = this.getMessageLatestUser(element._id);
              let item = {
                _id: element._id,
                userName: element.firstName + ' ' + element.lastName,
                ...latestMsg
              }
             
              listContacts.push(item);

            });
          }
        }
        if(allTutors.length>0) {
          if(user.role==='student') {
          listContacts = user.role==='student'?allTutors:allStudents;
          }
        }
      }


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

                          {listContacts.map((item,index)=>(
                           index===0?(
                           <div className="chat_list active_chat">
                            <div className="chat_people">
                              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="chat_ib">
                                <h5> {item.userName}<span className="chat_date">Dec 25</span></h5>
                                  <p>{item.message}</p>
                              </div>
                            </div>
                          </div>):
                          (
                            <div className="chat_list">
                            <div className="chat_people">
                              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="chat_ib">
                                <h5>{item.userName} <span className="chat_date">Dec 25</span></h5>
                                <p>{item.message}</p>
                              </div>
                            </div>
                          </div>
                          )
                          ))}
                     
                      </div>
                    </div>
                    <div className="mesgs">
                      <div className="msg_history">
                      { this.state.list.map((item) =>
                      userName===item.userName ? (<div className="incoming_msg">
                      <div className="incoming_msg_img"> 
                      <img src={user!==null?user.imageURL:"https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> 
                      </div>
                      <div className="received_msg">
                      <div className="received_withd_msg">
                          <p>{item.userName}</p>
                          <p>{item.message}</p> 
                          <span className="time_date">{item.time!==null?item.time:''}</span></div>
                      </div>
                      </div>) : (
                          <div className="outgoing_msg">         
                          <div className="outgoing_msg_img"> 
                           <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> 
                           </div>                   
                          <div className="sent_msg">
                            <p>{item.userName}</p>
                            <p>{item.message}</p>
                      <span className="time_date">{item.time!==null?item.time:''}</span> </div>
                        </div>)
                        
                        )} 



                      </div>
                      <div className="type_msg">
                        <div className="input_msg_write">
                          <input type="text" className="write_msg" value={this.state.message}  onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} placeholder="Type a message" />
                          <button className="msg_send_btn"  onClick={this.handleSend.bind(this)} type="button"> <i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                                  
                  
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getListStudents: fetchAllStudents,
      getListTutors: fetchAllTutors
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

