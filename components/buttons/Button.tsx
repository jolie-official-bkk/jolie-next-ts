import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const { children, ...rest } = props;
  return (
    <button
      className="bg-primary disabled:bg-disabled text-white py-2 px-6 shadow-md shadow-black/[0.5]"
      style={{ minWidth: 80 }}
      {...rest}
    >
      <p className="text-md">{children}</p>
    </button>
  );
}

export default Button;
