import React from "react";
import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul>
      {list.length &&
        list.map((listItem, index) => <MenuItem key={index} item={listItem} />)}
    </ul>
  );
}

export default MenuList;
