import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  const handleChildren = (currentLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [currentLabel]: !displayChildren[currentLabel],
    });
  };
  return (
    <li className="flex flex-col gap-4 m-4">
      <div className="flex gap-2">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <span className="cursor-pointer" onClick={() => handleChildren(item.label)}>
            {displayChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
