
import './App.css';
import DownloadPage from './pages/Download';
import SharePage from './pages/Share';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharePage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/download/:id' element={<DownloadPage />} />
        <Route
          path="*"
          element={
            <Error404 />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
