import { render, screen, fireEvent, act } from "@testing-library/react";
import LoginButton from "../../components/LoginButton";
import UserInfo from "../../components/UserInfo";
import { AuthContextProvider } from "../../context/AuthContext";

const makeSut = () => {
  return render(
    <AuthContextProvider>
      <LoginButton />
      <UserInfo />
    </AuthContextProvider>
  );
};

describe("<AuthContextProvider />", () => {
  test("Render not login", () => {
    makeSut();
    expect(screen.getByText(/please login/)).toBeInTheDocument();
  });
  test("Render login", async () => {
    makeSut();
    const btnLogin = screen.getByTestId(/btn-login/);
    fireEvent.click(btnLogin);
    expect(screen.getByText(/logout/)).toBeInTheDocument();
    expect(screen.getByText(/hello user/)).toBeInTheDocument();
  });
});
