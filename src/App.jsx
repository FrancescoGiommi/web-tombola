// import { useState } from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header />
      <div className="container d-flex my-3 text-center">
        <Main />
      </div>
    </>
  );
}

export default App;
