import React from "react";

export const Superman = ({ superhero }) => {
  const superheroRef = React.createRef();
  const changeColorHandler = () => {
    superheroRef.current.textContent = superhero;
  };
  return (
    <div>
      <h1 ref={superheroRef}>Superman</h1>
      <button onClick={changeColorHandler}>Change color</button>
    </div>
  );
};
