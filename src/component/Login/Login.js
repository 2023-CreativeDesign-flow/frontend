import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import "./Login.css";
import { signin } from "../../service/ApiService";

const Login = ({ handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");

    signin({ email: email, password: password }).then((response) => {
      handleLogin();
    }).catch((error) => {
      alert("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
    });
  };
  
  // 로그인되지 않은 사용자가 접근할 수 없는 페이지 URL
  const protectedPages = ["/copykiller", "/resultpage", "/mypage"];

  return (
    <Container component='main' maxWidth='xs' style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Typography component='h1' variant='h5' id='login'>
          CopyKiller
        </Typography>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {/* submit 버튼을 클릭하면 handleSubmit 이 실행됨}*/}{" "}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='이메일 주소'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='password'
              label='패스워드'
              name='password'
              autoComplete='password'
              type='password'
            />
          </Grid>
          <Grid item xs={12}>
            <button className='login-button' type='submit'>
              로그인
            </button>
          </Grid>
          <div className='go-signup-button'>
            <a href='/signup2' className='no-account'>
              회원가입
            </a>
          </div>
          <span className='material-symbols-rounded signup-symbols'>
            chevron_right
          </span>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
