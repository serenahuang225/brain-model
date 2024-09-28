import { Environment, Stars } from '@react-three/drei'
import React from 'react'

function Lights() {
  return (
    <>
      <Environment preset="forest" />
      {/* <pointLight position={[-10, -10, -10]} intensity={200} color={'#03f8fc'} />
      <pointLight position={[-5, -5, -5]} intensity={100} color={'#03f8fc'} />
      <pointLight position={[5, 5, 5]} intensity={100} color={'#03f8fc'} />
      <pointLight position={[5, -5, 5]} intensity={50} color={'#03f8fc'} /> */}
      {/* <spotLight position={[5, 5, 5]} angle={0.3} intensity={20}  color={'#03f8fc'} /> */}
      <Stars />
    </>
  )
}

export default Lights