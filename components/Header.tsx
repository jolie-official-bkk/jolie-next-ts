import React from "react";

function Header({ children }: { children: string }) {
  return (
    <div className="bg-white drop-shadow-lg shadow-black ">
      <h1 className="w-full text-center py-3 text-lg lg:text-xl font-medium tracking-tight leading-none text-black">
        {children}
      </h1>
    </div>
  );
}

export default Header;
