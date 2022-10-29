import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const { children, ...rest } = props;
  return (
    <button
      className="bg-primary text-white rounded py-1 px-2"
      style={{ minWidth: 80 }}
      {...rest}
    >
      <p className="text-lg">{children}</p>
    </button>
  );
}

export default Button;
