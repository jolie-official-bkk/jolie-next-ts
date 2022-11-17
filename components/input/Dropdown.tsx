import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { Dispatch, SetStateAction, useState } from "react";
import { camelCase } from "../../functions/camelCase";
import {
  genderTypeArray,
  IRegister,
  TGenderAttribute,
} from "../../interfaces/user.interface";

type PropsType = {
  label?: string;
  submission: IRegister;
  setSubmission: Dispatch<SetStateAction<IRegister>>;
  value: TGenderAttribute;
};

function Dropdown({ label, submission, setSubmission, value }: PropsType) {
  const [showDrowDown, setShowDrowDown] = useState<boolean>(false);
  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-black"
      >
        {label}
      </label>
      <div
        id="dropdownInformationButton"
        className="flex justify-between items-center bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        onClick={() => {
          setShowDrowDown((prev) => !prev);
        }}
      >
        {value}
        {showDrowDown && (
          <ChevronUpIcon className="h-4 text-black cursor-pointer" />
        )}
        {!showDrowDown && (
          <ChevronDownIcon className="h-4 text-black cursor-pointer" />
        )}
      </div>

      {showDrowDown && (
        <ul className="w-32 py-1 text-smtext-black z-10 bg-white absolute rounded shadow">
          {genderTypeArray.map((gender, genderIndex) => (
            <li
              key={genderIndex}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setShowDrowDown(false);
                setSubmission({ ...submission, gender: camelCase(gender) });
              }}
            >
              {camelCase(gender)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
