import React from "react";
import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

function Username() {
  const userName = useSelector(getUserName);

  if(!userName) return;
  return (
    <div className="text-sm font-semibold hidden md:block">{userName}</div>
  );
}

export default Username;
