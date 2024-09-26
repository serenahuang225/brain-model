import React, {useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber'

function Brain({name}) {
  const gltf = useGLTF('/brain.glb');
  const { invalidate, camera, gl } = useThree()

  useEffect(() => {
    console.log("help")
    invalidate()
  }, [name])

  return name==="Default" ? 
  <primitive object={gltf.scene.children.find(child => child.name === "Default")} position={[0,0,0]} /> :
  <primitive object={gltf.scene.children.find(child => child.name === "Sliced")} position={[0,0,0]} />
}

export default Brain;