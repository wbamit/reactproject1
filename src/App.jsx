import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './assets/bootstrap.min.css'
import './assets/style.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';

function App() {
  return (
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Router>
  );
}

/*function MyButton() {
  return (
    <button onClick={() => alert('hello this is react github project.')}>I'm a button</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyButton/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/


export default App
