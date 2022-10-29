import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

type PropsType = {
  label?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
};

function TextInput({
  label = "Text",
  name = "",
  onChange,
  placeholder = "",
  required = true,
  type = "text",
}: PropsType) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
