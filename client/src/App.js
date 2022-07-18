
import { useEffect } from 'react';
import './App.css';
import DownloadPage from './pages/Download';
import SharePage from './pages/Share';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Error404 from './pages/Error404';
import SharedAccountPage from './pages/SharedAccountPage';
import Navbar from './components/Navbar';
import Particle from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from './API/particlesConfig.json';
import { clearConsole } from './API/utils';

function App() {
  useEffect(() => {
    clearConsole();
  }, []);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };



  const particlesLoaded = (container) => {
    
  };
  return (
    <div className="App">
      <Navbar />
      <Particle
        options={ParticleConfig}
        init={particlesInit} loaded={particlesLoaded} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/landing' element={<SharePage />} />
        <Route path='/share' element={<SharedAccountPage />} />
        <Route path='/download' element={<DownloadPage />} />
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
