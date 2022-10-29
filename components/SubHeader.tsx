import React from "react";

type PropsType = {
  children: string;
};

function SubHeader({ children }: PropsType) {
  return (
    <p className="w-full my-4 text-center text-lg lg:text-2xl sm:px-16 xl:px-48 text-black-400">
      {children}
    </p>
  );
}

export default SubHeader;
