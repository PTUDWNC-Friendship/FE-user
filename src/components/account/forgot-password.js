import React from 'react';
import fetch from 'cross-fetch';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../login/style.css';
import { SERVER_URL } from '../../helpers/constant';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      isFetching: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isFetching: true,
      message: ''
    });

    const { username, type } = this.state;
    fetch(`${SERVER_URL}/user/forgotpassword`, {
      method: 'POST',
      body: JSON.stringify({
        username
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
      .catch(err => console.log(err));
  }

  render() {
    const { message, isFetching, username } = this.state;
    const { classes } = this.props;
    const types = ["local", "google", "facebook"];

    return (
      <div className={classes.body}>
        <Container
          style={{
            backgroundColor: 'white',
            paddingTop: '50px',
            height: '100%'
          }}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              className={classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                value={username}
                autoComplete="email"
                disabled={isFetching}
                onChange={this.handleChange}
              />
              
              <p style={{color: "blue"}}>{message}</p>
              { isFetching ? <CircularProgress color="secondary" /> : null }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                disabled={isFetching}
              >
                Send new password to your email
              </Button>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Friendship
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  },
  body: {
    paddingTop: '10vh',
    backgroundImage: 'url(https://source.unsplash.com/featured/?security)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '110vh'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ForgotPassword));
