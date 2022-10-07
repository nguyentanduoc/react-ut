import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";

const LoginButton = () => {
  const { logined, handleLogin } = useContext(AuthContext);
  return logined ? (
    <Button dataTestid="btn-logout" text="logout" onClick={handleLogin} />
  ) : (
    <Button dataTestid="btn-login" text="login" onClick={handleLogin} />
  );
};

export default LoginButton;
