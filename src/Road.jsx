/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 road.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Road = (props) =>{
  const { nodes, materials } = useGLTF('/assets/characters/main/road.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0.001, -0.004]} scale={[4.806, 43.106, 14.901]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001road']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002lines']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/characters/main/road.glb')

export default Road