import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import Lights from './components/Lights';
import ColorFullBrain from './components/ColorFullBrain';
import ColorSliceBrain from './components/ColorSliceBrain';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import FullBrain from './components/FullBrain';
import SliceBrain from './components/SliceBrain';
import ControlPanelToggle from './components/ControlPanelToggle';
import BrainMenu from './components/BrainMenu';
import Loader from './components/Loader';

// useGLTF.preload("/models/cfbrain.glb");
// useGLTF.preload("/models/sfbrain.glb");
// useGLTF.preload("/models/fbrain.glb");
// useGLTF.preload("/models/sbrain.glb");

function App() {
  const [view, setView] = useState('full');
  const [colorMode, setColorMode] = useState('color');
  const [isLoading, setIsLoading] = useState(true);

  const [itemDisplayed, setItemDisplayed] = useState(view+colorMode)

  // TODO:
  // loader in beginning

  useEffect(() => {
    if (view+colorMode!==itemDisplayed) {
      setItemDisplayed(view+colorMode)
    }
  }, [view, colorMode, itemDisplayed])

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(view+colorMode);
  const [showMenu, setShowMenu] = useState(true)
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <BrainMenu toggle={() => setShowMenu(prev => !prev)} show={showMenu} />
      <ControlPanelToggle view={view} setView={setView} colorMode={colorMode} setColorMode={setColorMode} />

      <Canvas 
        camera={{ position: [-5, 0, -6], fov: 42 }} 
        style={{ background: 'black' }}
        shadows
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {!isLoading && visibleItem === "fullcolor" && (
            <ColorFullBrain
              dissolveVisible={itemDisplayed === "fullcolor"}
              onFadeOut={onFadeOut}
            />
          )}
          {!isLoading && visibleItem === "slicecolor" && (
            <ColorSliceBrain
              dissolveVisible={itemDisplayed === "slicecolor"}
              onFadeOut={onFadeOut}
            />
          )}
          {!isLoading && visibleItem === "fullnoColor" && (
            <FullBrain
              dissolveVisible={itemDisplayed === "fullnoColor"}
              onFadeOut={onFadeOut}
            />
          )}
          {!isLoading && visibleItem === "slicenoColor" && (
            <SliceBrain
              dissolveVisible={itemDisplayed === "slicenoColor"}
              onFadeOut={onFadeOut}
            />
          )}
        </Suspense>


        <Lights />
        <gridHelper 
          args={[100, 100, '#4a90e2', '#2d5aa0']} 
          position={[0, -3, 0]} 
          receiveShadow
        />
        
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={0.5} mipmapBlur />
        </EffectComposer>

        <OrbitControls />
      </Canvas>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
    </div>
  );
}

export default App;