import React, { useEffect, useState } from "react";

function useLocalStorage(key, value) {
  const [theme, setTheme] = useState(() => {
    let currentTheme;
    try {
      currentTheme = JSON.parse(localStorage.getItem(key) || String(value));
    } catch (error) {
      console.log(error);
      currentTheme = value;
    }
    return currentTheme;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);
  return [theme, setTheme];
}

export default useLocalStorage;
