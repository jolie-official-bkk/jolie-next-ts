import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const { children, ...rest } = props;
  return (
    <button
      className={`flex h-12 justify-center items-center sticky bottom-0 bg-black text-white`}
      style={{ background: `${props.disabled ? "#484848" : "black"}` }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
