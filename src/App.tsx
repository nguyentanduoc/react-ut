import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <LoginButton />
      <UserInfo />
    </AuthContextProvider>
  );
}

export default App;
