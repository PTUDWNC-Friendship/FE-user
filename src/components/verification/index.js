import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';
import {} from '../../actions/user';
import { SERVER_URL } from '../../helpers/constant';

class Verification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.resendEmail = this.resendEmail.bind(this);
    }

    resendEmail() {
        const { _id } = this.props.userState.user;
        fetch(`${SERVER_URL}/user/verify/${_id}`)
            .then(response => response.json())
            .then(data => {
               this.setState({
                   message: data.message
               }) ;
            })
            .catch(error => console.log(error));
    }

    render() {
        const { message } = this.state;
        return (
          <div>
            <p>Your account is not verified. Click 
            <button className="btn btn-light" type="button" onClick={this.resendEmail}> here </button>
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