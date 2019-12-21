import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';
import { Spin, Alert } from 'antd';
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
          <div style={{ paddingTop: '100px' }}>
            <Spin spinning={isFetching} tip="Loading..." />
            <p>
              Your account is not verified. Click
              <button
                className="btn btn-light"
                type="button"
                onClick={this.resendEmail}
              >
                here
              </button>
              to resend email.
            </p>    
            <p style={{color: "blue"}}>{message}</p>
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