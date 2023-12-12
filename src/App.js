import React from "react";
import NavBar from './components/NavBar';
import HomePage from "./components/HomePage";
import PageTwo from "./components/PageTwo";
import AdditionalInfo from "./components/AdditionalInfo";

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <HomePage />
      <PageTwo />
      <AdditionalInfo />
    </div>

  );
}

export default App;
