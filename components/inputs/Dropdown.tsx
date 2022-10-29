import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { Dispatch, SetStateAction, useState } from "react";
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
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <div
        id="dropdownInformationButton"
        className="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        onClick={() => {
          setShowDrowDown((prev) => !prev);
        }}
      >
        {value}
        {showDrowDown && (
          <ChevronUpIcon className="h-4 text-white cursor-pointer" />
        )}
        {!showDrowDown && (
          <ChevronDownIcon className="h-4 text-white cursor-pointer" />
        )}
      </div>

      {showDrowDown && (
        <ul className="w-32 py-1 text-sm text-gray-700 dark:text-gray-200 z-10 bg-white absolute rounded shadow dark:bg-gray-700">
          {genderTypeArray.map((gender, genderIndex) => (
            <li
              key={genderIndex}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setShowDrowDown(false);
                setSubmission({ ...submission, gender: gender });
              }}
            >
              {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
