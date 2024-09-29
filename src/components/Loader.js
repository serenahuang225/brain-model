import { useProgress } from '@react-three/drei';
import React from 'react'
import './Loader.css';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <div style={{ position: 'absolute', zIndex: 100, top: '50%', left: '50%' }}>
      <h1 style={{color: 'cyan', fontStyle: 'italic'}}>LOADING... {Math.round(progress)}%</h1>
      <div className="loader-container">
        <div className="loader-bar" style={{ width: `${Math.round(progress)}%` }}>
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}

export default Loader