import React from 'react'
import { DissolveMaterial } from './DissolveMaterial'

const RenderBrainMesh = ({item, vis, onFadeOut, color}) => {

  // const onHover = () => {
  //   item.material.emissive.copy(item.material.color);
  //   item.material.emissiveIntensity = 1.1; 
  // }
  // const onHoverOut =() => {
  //   item.material.emissive.set('black');
  //   item.material.emissiveIntensity = 0;
  // }

  return <mesh key={item.uuid}
  // onPointerEnter={onHover} onPointerLeave={onHoverOut}
    geometry={item.geometry} material={item.material}
  >
    <DissolveMaterial
      baseMaterial={item.material}
      visible={vis}
      onFadeOut={onFadeOut}
      color={color}
    />
  </mesh>
}

export default RenderBrainMesh