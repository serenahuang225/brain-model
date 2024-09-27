import React, {useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber'

function Brain() {
  const gltf = useGLTF('/test.glb');
  const { invalidate, camera, gl } = useThree()

  // useEffect(() => {
  //   console.log("help")
  //   invalidate()
  // }, [name])

  console.log(gltf.scene.children)

  return <primitive object={gltf.scene.children.find(child => child.name === "Default")} position={[0,0,0]} />
}

export default Brain;