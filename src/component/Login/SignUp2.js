import React from "react";
import { TextField, Grid, Container } from "@mui/material";
import "./Login.css";
import { signup } from "../../service/ApiService";

const SignUp2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    // 이메일 유효성 검사를 위한 정규식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    // username이 영어로만 입력되었는지 검사하는 정규식
    const usernameRegex = /^[a-zA-Z]+$/;

    if (!emailRegex.test(email)) {
      alert("유효하지 않은 이메일 형식입니다.");
      return;
    }

    if (!usernameRegex.test(username)) {
      alert("회원명은 영어로만 입력해야 합니다.");
      return;
    }
    signup({ email: email, username: username, password: password })
      .then((response) => {
        console.log("response:", response);
        window.location.href = "/login";
        alert("회원가입에 성공하였습니다!");
      })
      .catch((error) => {
        alert("이메일이 이미 존재합니다!");
      });
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
              type="password"
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
