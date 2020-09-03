import * as React from "react";
import "./styles.css";
import ComponentA from "./ComponentA";

export const AppContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <AppContext.Provider value="-From App Component-">
        <ComponentA />
      </AppContext.Provider>
    </div>
  );
}
