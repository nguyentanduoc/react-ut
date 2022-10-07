import Button, { ButtonProps } from "../../components/Button";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonText from "../../components/ButtonText";

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button text="label" onClick={jest.fn()} {...props} />);
};

describe("<Button />", () => {
  test("Should render label correctly", () => {
    makeSut({ text: "My Button" });
    expect(screen.getByText(/My Button/)).toBeInTheDocument();
  });

  test("Should call onClick successfully", () => {
    const spy = jest.fn();
    makeSut({ onClick: spy });
    fireEvent.click(screen.getByText(/label/));
    expect(spy).toHaveBeenCalled();
  });
});

const mackSutChange = () => {
  return render(<ButtonText />);
};
describe("<mackSutChange />", () => {
  test("Should call onClick successfully", () => {
    mackSutChange();
    fireEvent.click(screen.getByTestId("btn"));
    expect(screen.getByText(/clicked/)).toBeInTheDocument();
  });
});
