export interface ButtonProps {
  text: string;
  onClick?: () => void;
  dataTestid?: string;
}
const Button = ({ dataTestid, text, onClick }: ButtonProps) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <button data-testid={dataTestid} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
