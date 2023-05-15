import React from "react";
import { TextField, Grid, Container } from "@mui/material";
import "../css/Login.css";
import { signup } from "../../service/ApiService";

const SignUp2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    signup({ email: email, username: username, password: password }).then(
      (response) => {
        window.location.href = "/login";
      }
    );
  };
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <div className="signup-title">SIGNUP</div>
          <Grid item xs={12}>
            <TextField
              autoComplete="username"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="사용자 이름"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="email"
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="current-password"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="패스워드"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <button className="login-button" type="submit">
              계정생성
            </button>
          </Grid>
          <div className="go-login-button">
            <a href="/login" variant="body2" className="yes-account">
              로그인
            </a>
          </div>
          <span className="material-symbols-rounded">chevron_right</span>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp2;