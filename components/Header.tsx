import React from "react";

type PropsType = {
  children: string;
};

function Header({ children }: PropsType) {
  return (
    <div className="bg-white drop-shadow-lg shadow-black ">
      <h1 className="w-full text-center py-3 text-lg lg:text-xl font-extrabold tracking-tight leading-none text-black bg-red-0">
        {children}
      </h1>
    </div>
  );
}

export default Header;
