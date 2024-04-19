import React from "react";
import MenuList from "./menu-list";

function Tree({ menus = [] }) {
  return (
    <div className="bg-blue-500 w-40 h-screen">
      <MenuList list={menus} />
    </div>
  );
}

export default Tree;
