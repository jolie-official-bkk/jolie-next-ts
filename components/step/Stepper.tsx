import React from "react";

function Stepper({ step = 0 }: { step: number }) {
  return (
    <div className="flex justify-between my-2 py-1 px-5 bg-white drop-shadow-md shadow-black">
      {[1, 1, 1, 1, 1, 1, 1].map((_, itemIndex) => (
        <div
          key={itemIndex}
          className={`w-10 h-1.5 rounded bg-${
            step > itemIndex ? "black" : "[#d9d9d9]"
          }`}
        />
      ))}
    </div>
  );
}

export default Stepper;
