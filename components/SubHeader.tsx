import React from "react";

function SubHeader({ children }: { children: string }) {
  return (
    <b className="w-full my-4 text-center text-md lg:text-xl sm:px-16 xl:px-48 text-black-400">
      {children}
    </b>
  );
}

export default SubHeader;
