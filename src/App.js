import React from 'react';

import Gallery from "./pages/gallery"

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className={"app__header"}></header>
      <main className={"app__main"}>
        <Gallery/>
      </main>
      <footer className={"app__footer"}>
      </footer>
    </div>
  );
}

export default App;
