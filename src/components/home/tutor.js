import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUserById } from '../../actions/user';
import { fetchTutorContracts } from '../../actions/contract';
import StudentList from './view-childs/list-students';

class Tutor extends React.Component {

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
    }

    render() {
      const { tutor } = this.props.userState;
        return (
            <div className="site-wrap">

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
                  {/* <!-- Detail Modal HTML --> */}
                  <div id="detailModal" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered container">
                      <div className="modal-content">
                        <form>
                          <div className="modal-header">
                            <h4 className="modal-title">Student detail</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          </div>
                          <div className="modal-body">
                            Body ne`
                          </div>
                          <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                            <input type="submit" className="btn btn-danger" value="OK"/>
                          </div>
                        </form>
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
