import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, useProgress } from '@react-three/drei';

import Lights from './components/Lights';
import ColorFullBrain from './components/ColorFullBrain';
import ColorSliceBrain from './components/ColorSliceBrain';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import FullBrain from './components/FullBrain';
import SliceBrain from './components/SliceBrain';
import ControlPanelToggle from './components/ControlPanelToggle';
import BrainMenu from './components/BrainMenu';
import Loader from './components/Loader';

useGLTF.preload("/models/cfbrain.glb");
useGLTF.preload("/models/sfbrain.glb");
useGLTF.preload("/models/fbrain.glb");
useGLTF.preload("/models/sbrain.glb");

function App() {
  const [view, setView] = useState('full');
  const [colorMode, setColorMode] = useState('color');

  const [itemDisplayed, setItemDisplayed] = useState(view+colorMode)

  // TODO:
  // make it look better
  // update descriptions
  // loader in beginning

  useEffect(() => {
    if (view+colorMode!==itemDisplayed) {
      setItemDisplayed(view+colorMode)
    }
  }, [view, colorMode, itemDisplayed])

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(view+colorMode);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <BrainMenu />
      <ControlPanelToggle view={view} setView={setView} colorMode={colorMode} setColorMode={setColorMode} />

      <Canvas camera={{ position: [-5, 0, -6], fov: 42 }} style={{ background: 'black' }}>
        <Suspense fallback={null}>
          {visibleItem === "fullcolor" && (
            <ColorFullBrain
              dissolveVisible={itemDisplayed === "fullcolor"}
              onFadeOut={onFadeOut}
            />
          )}
          {visibleItem === "slicecolor" && (
            <ColorSliceBrain
              dissolveVisible={itemDisplayed === "slicecolor"}
              onFadeOut={onFadeOut}
            />
          )}
          {visibleItem === "fullnoColor" && (
            <FullBrain
              dissolveVisible={itemDisplayed === "fullnoColor"}
              onFadeOut={onFadeOut}
            />
          )}
          {visibleItem === "slicenoColor" && (
            <SliceBrain
              dissolveVisible={itemDisplayed === "slicenoColor"}
              onFadeOut={onFadeOut}
            />
          )}
        </Suspense>


        <Lights />
        <gridHelper args={[100, 100, 'cyan', 'cyan']} position={[0, -3, 0]} />
        
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={0.5} mipmapBlur />
        </EffectComposer>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;