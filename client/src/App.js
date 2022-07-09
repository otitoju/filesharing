
import './App.css';
import DownloadPage from './pages/Download';
import SharePage from './pages/Share';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Error404 from './pages/Error404';
import SharedAccountPage from './pages/SharedAccountPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/landing' element={<SharePage />} />
        <Route path='/share' element={<SharedAccountPage />} />
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
