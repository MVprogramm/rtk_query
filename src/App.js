import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Todo from "./pages/Todo.jsx";
import Counter from "./pages/Counter.jsx";
import DenseAppBar from "./components/AppBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <DenseAppBar />
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
