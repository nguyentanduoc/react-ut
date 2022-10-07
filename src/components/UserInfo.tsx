import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserInfo = () => {
  const { logined } = useContext(AuthContext);

  return <div>{logined ? "hello user" : "please login"}</div>;
};

export default UserInfo;
