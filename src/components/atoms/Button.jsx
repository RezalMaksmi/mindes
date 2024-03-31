import React from "react";

const Button = (props) => {
  const { onClick, className, type, to, icon, text } = props;
  switch (type) {
   
      case "black":
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-black border text-white`}
        >
          <span>{text}</span>
        </a>
      );
    case "IconButton":
      return <button onClick={onClick} className={`px-2 py-2 rounded-lg flex gap-2  ${className}`}>{icon}</button>;

      case "ButtonTextIcon":
        return <button onClick={onClick} className={`px-3 py-1 rounded-lg flex gap-2  ${className}`}>{icon}{text}</button>;
    default:
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-white hover:bg-[#101A57] border transition-all hover:text-white text-black`}>
          <span>{text}</span>
        </a>
      );
  }
};

export default Button;
