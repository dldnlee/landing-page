import React from "react";
import NavBar from './components/NavBar';
import HomePage from "./components/HomePage";
import PageTwo from "./components/PageTwo";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <HomePage />
      <PageTwo />
      <AdditionalInfo />
      <Footer />
    </div>

  );
}

export default App;
