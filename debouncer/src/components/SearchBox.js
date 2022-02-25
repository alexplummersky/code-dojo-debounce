import React, { useRef } from "react";

export const SearchBox = ({ setSearchQuery }) => {
  const timerRef = useRef();

  const debounce = (input) => {
    const debounceTime = 2000;

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
      className={"github-input"}
    ></input>
  );
};
