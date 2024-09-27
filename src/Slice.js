import React from 'react';
import { useGLTF } from '@react-three/drei';

function Slice() {
  const { scene } = useGLTF('/slice.gltf');
  
  return <primitive object={scene} position={[0,0,0]} />
}

export default Slice;