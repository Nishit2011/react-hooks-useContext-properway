import React, { useContext } from "react";
import { AppContext } from "./App";

const ComponentAAA = () => {
  const app = useContext(AppContext);
  return <div>ComponentAAA- {app}</div>;
};

export default ComponentAAA;
