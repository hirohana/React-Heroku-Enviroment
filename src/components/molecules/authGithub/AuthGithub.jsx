/* eslint-disable jsx-a11y/anchor-is-valid*/
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "reducks/user/actionCreator";
import { deleteAllCookies } from "utils/deleteAllCookies/deleteAllCookies";
import useAuthGithub from "../../../hooks/components/useAuthGithub";

const AuthGithub = () => {
  const { message, setMessage, onAuthGitHubHandler } = useAuthGithub();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(user);
  }, [user, setMessage]);

  const logoutFromGitHub = () => {
    dispatch(logout());
    deleteAllCookies();
  };

  return (
    <>
      <a onClick={(e) => onAuthGitHubHandler(e)}>
        <span></span> Sign in with Github
      </a>
      <p>{message.displayName}</p>
      <img src={message.photoUrl} alt="" />
      <button onClick={logoutFromGitHub}>GitHubアカウントからログアウト</button>
    </>
  );
};

export default AuthGithub;
