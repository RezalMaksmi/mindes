import React from "react";

const Input = (props) => {
  const {
    typeInput,
    type,
    placeholder,
    onChange,
    value,
    name,
    className,
    icon,
  } = props;
  switch (typeInput) {
    case "Search":
      return (
        <input
          type={type}
          className="border-2 border-lightgray bg-white h-auto w-full px-5 pr-5 rounded-md text-sm focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );

    case "InputWithIcon":
      return (
        <div className="bg-white border-2 border-secondary h-[60px] w-full lg:w-[100%]  px-5 pr-5 rounded-md flex justify-center items-center space-x-5">
          {icon}
          <input
            type={type}
            className="w-full h-full text-sm text-darkgray focus:outline-none placeholder:text-secondary"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      );

    case "InputMessage":
      return (
        <div className="relative">
          <textarea
            type={type}
            className="w-[300px] md:w-[500px] h-[30vh] p-3 bg-white rounded-md border border-gray-300 placeholder-gray-400 text-darkgray focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            style={{ resize: "none" }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="h-8 w-8 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              stroke="currentColor"></svg>
          </div>
        </div>
      );

    default:
      return (
        <input
          type={type}
          className={`focus:outline-none placeholder:text-secondary  px-4 py-2 rounded-md border border-gray-400 ${className}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      );
  }
};

export default Input;
