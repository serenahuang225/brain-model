import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Brain from './Brain';
import Lights from './Lights';
import Menu from './Menu';

function App() {
  const [view, setView] = useState('Default');

  console.log(view)

  // TODO:
  // make a page for each brian part and a menu and an explanaiton for each one. an also sleep earlier becuase i'm really tired.

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Menu setView={setView} view={view} />
      <Canvas frameloop={'demand'} camera={{ position: [0, 0, 5] }} style={{ background: 'black' }}>
        <Lights />


        <Brain name={view} />

        <gridHelper args={[100, 100, 'cyan', 'cyan']} position={[0, -3, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
