import { Environment, Stars } from '@react-three/drei'
import React from 'react'

function Lights() {
  return (
    <>
      <Environment preset="warehouse" intensity={0.2} />
      
      <ambientLight intensity={0.2} color="#ffffff" />
      
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      <directionalLight
        position={[-8, 5, -5]}
        intensity={0.25}
        color="#e6f3ff"
      />
      
      <directionalLight
        position={[0, 5, 10]}
        intensity={0.25}
        color="#ffecd9"
      />
      
      <pointLight
        position={[5, 8, 3]}
        intensity={0.1}
        color="#fff5e6"
        distance={15}
        decay={2}
      />
      
      <pointLight
        position={[-5, 3, -3]}
        intensity={0.15}
        color="#e6f3ff"
        distance={12}
        decay={2}
      />
      
      <directionalLight
        position={[0, -5, 0]}
        intensity={0.05}
        color="#ffffff"
      />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
    </>
  )
}

export default Lights