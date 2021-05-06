import React from "react";

export function User({ name, picture }) {
  function getName() {
    let arr = [];
    let i = 0;
    for (let key in name) {
      arr[i] = name[key];
      i++;
    }
    return arr.join(" ");
  }
  return (
    <div>
      <h1>{getName()}</h1>
      <img src={`${picture.large}`} alt="none" />
    </div>
  );
}
