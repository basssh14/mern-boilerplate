import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";

export default function Button1() {
  return (
    <Dropdown
      placement="bottom-start"
      buttonText="User"
      buttonType="filled"
      size="regular"
      rounded={false}
      block={false}
      ripple="light"
      className="bg-white text-gray-900 w-full h-full"
    >
      <DropdownLink href="#" ripple="light" onClick={(e) => e.preventDefault()}>
        Settings
      </DropdownLink>
      <DropdownLink
        href="#"
        ripple="light"
        className="bg-gray-800 border-t border-gray-100"
        onClick={(e) => e.preventDefault()}
      >
        Log Out
      </DropdownLink>
    </Dropdown>
  );
}
