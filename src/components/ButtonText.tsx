import { useState } from "react";

const ButtonText = () => {
  const [text, setText] = useState("default");
  const handleClick = () => {
    setText("clicked");
  };
  return (
    <button data-testid="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonText;
