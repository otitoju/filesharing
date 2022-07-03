
import './App.css';
import DownloadPage from './pages/Download';
import SharePage from './pages/Share';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharePage />} />
        <Route path='/download/:id' element={<DownloadPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
