import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import { Path } from './Pages/HomePage/Path/Patch';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={Path.Home} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
