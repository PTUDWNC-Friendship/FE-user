import React from "react";
import clsx from "clsx";
import fetch from "cross-fetch";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FacebookLogin from 'react-facebook-login';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import $ from "jquery";
import '../login/style.css';
import { SERVER_URL } from "../../helpers/constant";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Friendship
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  },
  body: {
    paddingTop: "10vh",
    backgroundImage: "url(https://source.unsplash.com/featured/?programming,education)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "110vh"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const { classes } = props;

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

class Register extends React.Component {
  doRegister = e => {
    e.preventDefault();
    if (
      e.target.password.value !== e.target.retypepassword.value ||
      e.target.password.value === ""
    ) {
      $("#errorMsg").show();
    } else {
      $("#errorMsg").hide();

      fetch(`${SERVER_URL}/user/register`, {
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          gender: e.target.gender.value,
          password: e.target.password.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(
          response => response.json(),

          error => console.log("An error occurred.", error)
        )
        .then(json => {
          if (json != null) {
            const { history } = this.props;
            history.push("/login");
          } else {
            $("#errorMsgSer").show();
          }
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <Container
          style={{
            backgroundColor: "white",
            paddingTop: "50px",
            height: "100%"
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
              Sign up
            </Typography>
            <form
              onSubmit={this.doRegister}
              className={classes.form}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup defaultValue="female" name="gender" row>
                    <FormControlLabel
                      value="female"
                      control={<StyledRadio classes={classes} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<StyledRadio classes={classes} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<StyledRadio classes={classes} />}
                      label="Other"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="retypepassword"
                    label="Confirm Password"
                    type="password"
                    id="retypepassword"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>

              <Grid container justify="flex-end" style={{height: "50px"}}>
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>

              <div style={{display: 'flex',flexWrap: 'wrap' }} className="d-flex justify-content-center" >
                <FacebookLogin
                    appId=""
                    autoLoad={false}
                    fields="name,email,picture"
                    // callback={this.props.SocialSignUp}
                    cssClass="btnFacebook"
                    icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}} />}
                    textButton = "&nbsp;&nbsp;Sign In with Facebook"
                    />
                    <a href="javascript;">
                    <button
                        type="button"
                        // onSuccess={this.props.SocialSignUp}
                        // onFailure={this.props.SocialSignUp}
                        className="btnGoogle">
                        <i className="fa fa-google-plus" style={{ marginLeft:
                        '5px' }}/>
                        <span>&nbsp;&nbsp;Sign In with Google</span>
                    </button>
                    </a>
              </div>
            </form>
            <div
              className="error"
              id="errorMsg"
              style={{ display: "none", color: "red", textAlign: "center" }}
            >
              Xin vui lòng nhập lại mật khẩu giống với mật khẩu đã nhập
            </div>
            <div
              className="error"
              id="errorMsgSer"
              style={{ display: "none", color: "red", textAlign: "center" }}
            >
              Có lỗi xảy ra
            </div>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Register));
