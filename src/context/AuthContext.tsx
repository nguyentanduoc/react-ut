import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  handleLogin: () => void;
  logined: boolean;
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [logined, setLogined] = useState(false);
  const handleLogin = () => {
    setLogined((pre) => !pre);
  };

  return (
    <AuthContext.Provider value={{ logined, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
