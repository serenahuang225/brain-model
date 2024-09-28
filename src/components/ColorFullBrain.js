import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { DissolveMaterial } from "./DissolveMaterial";

const ColorFullBrain = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/cfbrain.glb"
  );
  console.log(nodes.Scene)

  const RenderItem = (item) => {
    return <mesh key={item.uuid}
      geometry={item.geometry} material={item.material}
    >
      <DissolveMaterial
        baseMaterial={item.material}
        visible={props.dissolveVisible}
        onFadeOut={props.onFadeOut}
        color="#2d9c4b"
      />
    </mesh>
  }

  const renderItems = nodes.Scene.children.map(item => {
    if (item?.isGroup) {
      return item.children.map(i => {
        return RenderItem(i)
      })
    } else {
      return RenderItem(item)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {renderItems}
    </group>
  );
}


export default ColorFullBrain