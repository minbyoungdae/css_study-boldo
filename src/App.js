import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
