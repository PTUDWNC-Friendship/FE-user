import React from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FacebookLogin from 'react-facebook-login';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import { login, authorizeUser } from '../../actions/user';
import './style.css';

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
    paddingTop: '10vh',
    height: '100vh'
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/featured/?programming,education)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    const { userState } = this.props;
    if (userState.user !== null) {
      const { history } = this.props;
      if (userState.user.role === 'tutor') {
        history.push('/home-tutor');
      }
      if (userState.user.role === 'student') {
        history.push('/home-student');
      }
    }
  }

  handleSubmit = e => {
    $('#idLoading').show();
    e.preventDefault();
    const { loginAction } = this.props;
    Promise.resolve(
      loginAction(e.target.email.value, e.target.password.value)
    ).then(() => {
      const { userState } = this.props;
      if (userState.isFetching === false) {
        if (userState.user === null) {
          $('#errorMsg').show();
          $('#idLoading').hide();
        } else {
          const { history } = this.props;
          if (userState.user.role === null) {
            history.push('/roles');
            $('#idLoading').hide();
          } else {
            if (userState.user.role === 'tutor') {
              history.push('/home-tutor');
            }
            if (userState.user.role === 'student') {
              history.push('/home-student');
            }
            $('#idLoading').hide();
          }
        }
      }
    });
  };

  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              className={classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>

              <Grid container style={{ height: '80px' }}>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register-tutor" variant="body2">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>

              <div
                style={{ display: 'flex', flexWrap: 'wrap' }}
                className="d-flex justify-content-center"
              >
                <FacebookLogin
                  autoLoad={false}
                  appId="2538620279701791"
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="btnFacebook"
                  icon={
                    <i
                      className="fa fa-facebook"
                      style={{ marginLeft: '5px' }}
                    />
                  }
                  textButton="&nbsp;&nbsp;Sign In with Facebook"
                />
                <a href="javascript;">
                  <button type="button" className="btnGoogle">
                    <i
                      className="fa fa-google-plus"
                      style={{ marginLeft: '5px' }}
                    />
                    <span>&nbsp;&nbsp;Sign In with Google</span>
                  </button>
                </a>
              </div>

              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
            <div
              className="error"
              id="errorMsg"
              style={{ display: 'none', color: 'red', textAlign: 'center' }}
            >
              Incorrect email or password, please check again!
            </div>
            <div className="d-flex justify-content-center">
              <div
                id="idLoading"
                style={{ display: 'none' }}
                className="spinner-border text-success"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (username, password) => dispatch(login(username, password)),
    authorizeUserAction: () => dispatch(authorizeUser)
  };
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Login)));
