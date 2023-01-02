import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import Home from './components/Home';
import { ContextProvider } from "./ProductsContext";
import Products from "./components/Products";

// export const NameContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <NameContext.Provider value="Chuzzi">
        <Home />
      </NameContext.Provider> */}
      <ContextProvider>
        <Products />
      </ContextProvider>
    </div>
  );
}

export default App;
