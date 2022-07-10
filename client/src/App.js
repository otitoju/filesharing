
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

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};

const particlesLoaded = (container) => {
    console.log(container);
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
