import { useProgress } from '@react-three/drei';
import React, { useState, useEffect } from 'react'
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const { progress, loaded, total } = useProgress();
  const [simulatedProgress, setSimulatedProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (total === 0) return;
    
    // Simulate loading with a minimum time of 3 seconds
    const minLoadTime = 2000; // 3 seconds
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const realProgress = (loaded / total) * 100;
      
      // Use the slower of real progress or simulated progress
      const currentProgress = Math.min(realProgress, (elapsed / minLoadTime) * 100);
      
      setSimulatedProgress(currentProgress);
      
      // Keep loading until both real loading is complete AND minimum time has passed
      if (loaded === total && elapsed >= minLoadTime) {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
        clearInterval(interval);
      }
    }, 50); // Update every 50ms for smooth animation
    
    return () => clearInterval(interval);
  }, [loaded, total]);
  
  // Show loader if still loading or if we haven't started loading yet
  if (isLoading || total === 0) {
    return (
      <div style={{ position: 'absolute', zIndex: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{color: 'cyan', fontStyle: 'italic'}}>LOADING... {Math.round(simulatedProgress)}%</h1>
        <div className="loader-container">
          <div className="loader-bar" style={{ width: `${Math.round(simulatedProgress)}%` }}>
            {Math.round(simulatedProgress)}%
          </div>
        </div>
      </div>
    );
  }
  
  return null;
}

export default Loader