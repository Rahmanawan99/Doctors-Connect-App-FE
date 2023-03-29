import React from "react";
import "./App.css";
import Layout from "./layout/routes";
import { AppContextProvider } from "./Components/Context";
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </div>
  );
}

export default App;
