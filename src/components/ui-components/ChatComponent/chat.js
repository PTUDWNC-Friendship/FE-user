/* eslint-disable react/no-unused-state */
import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Button } from 'react-bootstrap';
import $ from 'jquery';
import './chat.css';
import { fetchAllStudents, fetchAllTutors } from '../../../actions/user';



  function ChatWithPerson(array, user, coWorker) {
        // eslint-disable-next-line 
    let allChats = [];
    
    array.reverse().forEach( item=> {
      if(user!==null&&coWorker!==null) {
      if(item.idSender===user._id&&item.idReceiver===coWorker._id) {
        const row = <div className="incoming_msg">
                    <div className="incoming_msg_img"> 
                          <img src={user!==null?user.imageURL:"https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> 
                          </div>
                          <div className="received_msg">
                          <div className="received_withd_msg">
                              <p>{item.userName}</p>
                              <p>{item.message}</p> 
                              <span className="time_date">{item.time!==null?item.time:''}</span></div>
                          </div>
                      </div>;
          allChats.push(row);
      }
    }
      if(coWorker!==null) {
        if(item.idSender===coWorker._id && item.idReceiver===user._id) {
          const row = <div className="outgoing_msg">         
          <div className="outgoing_msg_img"> 
           <img src={coWorker!==null?coWorker.imageURL:"https://ptetutorials.com/images/user-profile.png"} alt="sunil" /> 
           </div>                   
          <div className="sent_msg">
            <p>{item.userName}</p>
            <p>{item.message}</p>
      <span className="time_date">{item.time!==null?item.time:''}</span> </div>
        </div> ;
          allChats.push(row);
        }
      }


    });

    return allChats;
}


class Chat extends React.Component {

    constructor(props) {
        super(props);

          this.state = {
            userName: '',
            coWorker: null,
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

    getMessageLatestUser(idSender,idUser) {
      const sortArray = this.state.allMessages;
      sortArray.sort(function(a,b){
        // eslint-disable-next-line 
        return new Date(b.date + " "+b.time) - new Date( a.date + " "+a.time);           
        });
 
      
      for(let i = 0 ; i<sortArray.length;i += 1) {
        // eslint-disable-next-line 
        if(!sortArray[i].hasOwnProperty('time')) {
          sortArray.splice(i,1);
          i -= 1;
       
        }
      }
      // eslint-disable-next-line 
      let latestMsg = {message: '', time: ''};

    // Sua lai thanh for thuong
    for(let i = 0;i<sortArray.length;i+=1) {
      if(idSender===sortArray[i].idSender&&sortArray[i].idReceiver===idUser) {
        latestMsg.message = sortArray[i].message;
        latestMsg.time = sortArray[i].time;
        break;
      }
    }
      return latestMsg;
      }
    
      setChatWithAnother(coWorker) {
        this.setState({
          coWorker
        });
      }

      handleChange(event) {
        this.setState({message: event.target.value});
      }
      


      handleSend(coWorker) {
        if (this.state.message) {
          const { userState } = this.props;
          const {user} = userState;
          if(user!==null) {
            const newItem = {
              idSender: user._id,
              idReceiver: coWorker._id,
              userName: `${user.firstName  } ${ user.lastName}`,
              message: this.state.message,
              time: (new Date()).toString(),
            };
  
            this.messageRef.push(newItem);
            this.setState({ message: '' });
          }
        }
      }

      handleKeyPress(event, coWorker) {
        if (event.key !== 'Enter') return;
        this.handleSend(coWorker);
      }

      changeCoWorker(coWorker,index,length) {
       
        for(let i=0;i<length;i+=1) {
            $(`#chat${i}`).removeClass('active_chat');
        }

        $(`#chat${index}`).addClass('active_chat');
        if(coWorker!==null) {
          this.setState({
            coWorker
          });
        
        }

      }

    listenMessages() {

      this.messageRef       
          .on('value', message => {
            this.setState({
              allMessages: Object.values(message.val()),
              });
          });


        this.messageRef
          .on('value', message => {
            this.setState({
                list: Object.values(message.val()),
              });
          });
      }
    
      
    

    render() {
      $('#chatForm').scrollTop =  $('#chatForm').scrollHeight;
      const { userState } = this.props;
      const {user, allStudents, allTutors} = userState;
      let coWorker = null;
        // eslint-disable-next-line 
      let userName = null;
         // eslint-disable-next-line 
      let listContacts = [];
      if(user!==null) {
        userName = `${user.firstName  } ${ user.lastName}`;
        if(allStudents.length>0) {
          // listContacts = user.role==='tutor'?allStudents:allTutors;
          if(user.role==='tutor') {
            
           
            allStudents.forEach((element,index) => {
              if(index===0) {
                coWorker = element;
              }
              const latestMsg = this.getMessageLatestUser(element._id,user._id);
              // eslint-disable-next-line 
              let item = {
                _id: element._id,
                // eslint-disable-next-line 
                userName: element.firstName + ' ' + element.lastName,
                ...latestMsg
              };
             
              listContacts.push(item);

            });
          }
        }
        if(allTutors.length>0) {
          if(user.role==='student') {
            allTutors.forEach((element,index) => {
              if(index===0) {
                coWorker = element;
              }
              const latestMsg = this.getMessageLatestUser(element._id,user._id);
              // eslint-disable-next-line 
              let item = {
              ...element,
                // eslint-disable-next-line 
                userName: element.firstName + ' ' + element.lastName,
                ...latestMsg
              };
             
              listContacts.push(item);

            });
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
                      <div id="chatForm" className="inbox_chat">

                          {listContacts.map((item,index)=>(
                           index===0?(
                           <Button style={{width: '100%'}} id={`chat${index}`} className="chat_list active_chat" onClick={()=>this.changeCoWorker(item,index,listContacts.length)}>
                            <div className="chat_people">
                              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="chat_ib">
                           <h5> {item.userName}</h5>
                                  <p>{item.message}</p>
                              </div>
                            </div>
                          </Button>):
                          (
                            <Button id={`chat${index}`} style={{width: '100%'}} onClick={()=>this.changeCoWorker(item,index,listContacts.length)}  className="chat_list">
                            <div className="chat_people">
                              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="chat_ib">
                                <h5>{item.userName} </h5>
                                <p>{item.message}</p>
                              </div>
                            </div>
                          </Button>
                          )
                          ))}
                     
                      </div>
                    </div>
                    <div className="mesgs">
                      <div className="msg_history">
                      
                      {user!==null&&this.state.coWorker!==null?ChatWithPerson(this.state.allMessages,user,this.state.coWorker):ChatWithPerson(this.state.allMessages,user,coWorker)}


                      </div>
                      <div className="type_msg">
                        <div className="input_msg_write">
                          <input type="text" className="write_msg" value={this.state.message}  onChange={this.handleChange.bind(this)} onKeyPress={e => this.state.coWorker!==null?this.handleKeyPress(e,this.state.coWorker):this.handleKeyPress(e,coWorker)} placeholder="Type a message" />
                          <button className="msg_send_btn"  onClick={this.state.coWorker!==null?this.handleSend.bind(this, this.state.coWorker):this.handleSend.bind(this, coWorker)} type="button"> <i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
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

