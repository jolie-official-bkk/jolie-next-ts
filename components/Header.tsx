import React from "react";

type PropsType = {
  children: string;
};

function Header({ children }: PropsType) {
  return (
    <h1 className="w-full text-center py-4 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none text-black bg-red-0">
      {children}
    </h1>
  );
}

export default Header;
