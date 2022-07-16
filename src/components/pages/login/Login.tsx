/* eslint-disable @typescript-eslint/no-explicit-any*/

import { useState } from 'react';

import {
  Avatar,
  Button,
  Grid,
  Typography,
  Box,
  TextField,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from './Login.module.scss';
import { useAuthLoginAndSignUp } from 'hooks/components/Login/useAuthLoginAndSignUp';
import DefaultLayout from 'components/templates/defaultLayout/DefaultLayout';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    image,
    userName,
    email,
    password,
    retypingPassword,
    changeImageHandler,
    setEmail,
    setUserName,
    setPassword,
    setRetypingPassword,
    authLogin,
    signUp,
  } = useAuthLoginAndSignUp();

  return (
    <DefaultLayout>
      <div className={styles.global_container}>
        <div className={styles.container}>
          <div>
            <Avatar></Avatar>
            <Typography component="h1" variant="h5">
              {isLogin ? 'ログイン' : 'アカウント登録'}
            </Typography>
            <form onSubmit={(e) => (isLogin ? authLogin(e) : signUp(e))}>
              {!isLogin && (
                <>
                  <Box textAlign="right">
                    <label>
                      <AccountCircleIcon
                        fontSize="large"
                        className={
                          image
                            ? styles.login_addIconLoaded
                            : styles.login_addIcon
                        }
                      />
                      <input
                        className={styles.login_hiddenIcon}
                        type="file"
                        onChange={changeImageHandler}
                        required
                        disabled={image ? true : false}
                      />
                    </label>
                  </Box>
                  <TextField
                    id="username"
                    label="ユーザー名"
                    name="username"
                    variant="outlined"
                    fullWidth
                    required
                    className={styles.textfield}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </>
              )}
              <TextField
                id="email"
                label="Eメールアドレス"
                name="email"
                variant="outlined"
                fullWidth
                required
                className={styles.textfield}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                name="password"
                label="パスワード"
                type="password"
                id="password"
                required
                fullWidth
                variant="outlined"
                value={password}
                className={styles.textfield}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isLogin || (
                <TextField
                  name="retypingPassword"
                  label="確認用パスワード"
                  type="password"
                  variant="outlined"
                  fullWidth
                  id="retypingPassword"
                  required
                  value={retypingPassword}
                  className={styles.textfield}
                  onChange={(e) => setRetypingPassword(e.target.value)}
                />
              )}

              <Button
                fullWidth
                variant="contained"
                className={styles.submit_button}
                type="submit"
              >
                {isLogin ? 'ログイン' : 'アカウント登録'}
              </Button>
              <Grid container>
                <Grid item>
                  <span
                    className={styles.login_toggleMode}
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'アカウント登録画面へ' : 'ログイン認証画面へ'}
                  </span>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className={styles.background_image}></div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
