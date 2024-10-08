import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { DissolveMaterial } from "./DissolveMaterial";
import RenderBrainMesh from "./RenderBrainMesh";

const ColorSliceBrain = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/csbrain.glb"
  );

  const renderItems = nodes.Scene.children.map(item => {
    if (item?.isGroup) {
      return item.children.map(i => {
        return <RenderBrainMesh
          color={"#9c2d2d"} item={i} vis={props.dissolveVisible} onFadeOut={props.onFadeOut}/>
      })
    } else {
      return <RenderBrainMesh
        color={"#9c2d2d"} item={item} vis={props.dissolveVisible} onFadeOut={props.onFadeOut}/>
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {renderItems}
    </group>
  );
}


export default ColorSliceBrain