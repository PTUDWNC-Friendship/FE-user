import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';
import { Spin, Alert } from 'antd';
import { Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import 'antd/dist/antd.css';
import { SERVER_URL } from '../../helpers/constant';

class Verification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isFetching: false
        };
        this.resendEmail = this.resendEmail.bind(this);
    }

    resendEmail() {
        const { user } = this.props.userState;
        this.setState({
            isFetching: true
        })
        return fetch(`${SERVER_URL}/user/verify`, {
          method: 'POST',
          body: JSON.stringify({
            ...user
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
              message: data.message,
              isFetching: false
            });
          })
          .catch(error => console.log(error));
    }

    render() {
        const { message, isFetching } = this.state;
        return (
          <div
            className="site-blocks-cover overlay"
            data-aos="fade"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url('images/tutor-1.jpg')" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-center text-white" data-aos="fade">




                  <Typography component="h1" variant="h5">
                    Your account is not verified.
                    <br/>
                    To resend email, please..
                  </Typography>
                  {(!isFetching && !message) ? (
                    <Button
                      type="button"
                      className="btn btn-success py-3 text-center text-white"
                      style={{ margin: '2.5%', width: '10%' }}
                      onClick={this.resendEmail}
                    >
                      <strong>Click here</strong>
                    </Button>
                  ) : (
                    <>
                      <Spin className='success' spinning={isFetching} size="large" tip="Loading..." />
                      <p color="white">{message}</p>
                    </>
                  )}

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

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

export default connect(mapStateToProps, null)(Verification);
