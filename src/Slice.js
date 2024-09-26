import React from 'react';
import { useGLTF } from '@react-three/drei';

function Slice() {
  const { scene } = useGLTF('/slice.gltf'); // Make sure to replace with your brain model path.
  console.log("hi from slice")
  return <primitive object={scene} position={[0,0,0]} />
}

export default Slice;