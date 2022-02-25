import React, { useRef } from "react";

export const SearchBox = ({ setSearchQuery }) => {
  const timerRef = useRef();

  const debounce = (input) => {
    const debounceTime = 500;

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearchQuery(input);
    }, debounceTime);
  };

  const changeHandler = (event) => {
    debounce(event.target.value);
  };

  return (
    <input
      type="search"
      onChange={changeHandler}
      placeholder="Enter a username"
      className={"github-input"}
    />
  );
};
