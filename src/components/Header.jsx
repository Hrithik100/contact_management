/* eslint-disable react/prop-types */
import React from "react";

const Header = ({myTitle}) => {
    const {title} = myTitle
  return (
    <header className="bg-[#1f456e] p-3 text-center">
      <h1 className="text-white font-[500] text-[40px] xl:text-[]">{title}</h1>
    </header>
  );
};

export default Header;
