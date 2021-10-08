import { useEffect, useState } from "react";

export const ListItem = (props) => {
  const [isMarked, setMarked] = useState(false);

  const handleClick = () => {
    setMarked(!isMarked);
  };

  return (
    <li
      onClick={handleClick}
      className={isMarked ? "markedItem" : "unmarkedItem"}
    >
      {props.name}
    </li>
  );
};
