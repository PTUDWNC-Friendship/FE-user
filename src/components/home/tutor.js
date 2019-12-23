import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import $ from 'jquery';
import { fetchUserById } from '../../actions/user';
import { fetchTutorContracts } from '../../actions/contract';
import StudentList from './view-childs/list-students';
import { StudentCard } from '../ui-components/StudentCard/StudentCard';

class Tutor extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        fetching: false
      };
    }

    componentDidMount() {
      const { user } = this.props.userState;
      const { history } = this.props;

      if (user !== null) {
        if (user.status === 'notverified') {
          history.push('/verify');
        } else if (user.role === 'student') {
          history.push('/home-student');
        }
      }

      if (user !== null && !this.state.fetching ) {
        this.setState({
          fetching: true
        });
        this.props.fetchUserByIdAction(user._id);
      }

      const { allContracts } = this.props.contractState;
      if (allContracts.length !== 0 && !this.state.fetching)
      {
        this.setState({
          fetching: true
        });
      }
    }

    componentDidUpdate() {
      const { user } = this.props.userState;

      if (user !== null && !this.state.fetching ) {
        this.setState({
          fetching: true
        });
        this.props.fetchUserByIdAction(user._id);
      }

      const { allContracts } = this.props.contractState;
      if (allContracts.length !== 0 && !this.state.fetching)
      {
        this.setState({
          fetching: true
        });
      }
      if (user !== null) {

        if (user.role === 'student') {
          this.props.history.push('/home-student');
        }
      } else {
        this.props.history.push('/login');
      }
    }

    detailInfor() {
      $('#tutorCard').click();
    }

    passingProps(element) {
      if(element!==null) {
        $("#imgModal").attr("src",element.imageURL);
        $('#genderModal').text(element.gender!==null?`Gender: ${element.gender} `:'Gender: Other');
        $('#phoneModal').text(element.phone!==null?`Contact: ${element.phone} `:'Phone number: Non-available');
        $('#nameModal').text(`${element.firstName} ${element.lastName}`);
        $('#addressModal').text(element.address!==null?`Address: ${element.address} `:'Address: Non-available');
        $('#bioModal').text(element.bio);

        $('#modalButton').click();
      }
    }


    render() {
      const { tutor } = this.props.userState;
        return (
            <div className="site-wrap">
              <StudentCard/>
                <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('images/tutor-1.jpg')"}}>

                  <div className="container">
                    <div className="row align-items-center">

                      <div className="col-12" data-aos="fade">
                      {tutor !== null ? (
                        <h1>Welcome back {tutor.title} {tutor.firstName} {tutor.lastName}</h1>
                      ) : (
                        <h1>Welcome back ...</h1>
                      )}

                        <h1>Wish you have a great day!</h1>
                        <div className="col-md-12">
                          <p className="small">Let us know if you have something new.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <StudentList />

                <div className="site-section block-15">
                  <div className="container">
                  <div className="text-center mb-5 section-heading">
                    <h2>How does it work?</h2>
                  </div>

                  <div className="d-block d-md-flex border-bottom">
                    <div className="text-center p-4 item border-right" data-aos="fade">
                      <span className="flaticon-worker display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-wrench display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                  </div>
                  <div className="d-block d-md-flex">
                    <div className="text-center p-4 item border-right" data-aos="fade">
                      <span className="flaticon-stethoscope display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
                    </div>
                    <div className="text-center p-4 item" data-aos="fade">
                      <span className="flaticon-calculator display-3 mb-3 d-block text-success" />
                      <h2 className="h4">Will Be Updated</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                      <p><Link to="/" className="text-success">Read More <span className="icon-arrow-right small" /></Link></p>
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
    userState: state.userState,
    contractState: state.contractState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserByIdAction: id => dispatch(fetchUserById(id)),
    fetchTutorContractsAction: id => dispatch(fetchTutorContracts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tutor));
