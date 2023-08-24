import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
// import { AmbientLight } from "three";
import { OrbitControls } from "@react-three/drei";

import Model from "./Defeated-maincharacter";
import Road from "./Road";
import backgroundImage from "./background.jpg";

// console.log(backgroundImage);
const Main = () => {
  // const mountRef = useRef(null);

  // useEffect(() => {
  //   // Set up Three.js scene
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );

  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   mountRef.current.appendChild(renderer.domElement);

  //   // Set initial camera position
  //   camera.position.set(0, 0, 3);
  //   camera.lookAt(0, 0, 0);

  //   // Animation loop
  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   // Clean up
  //   return () => {
  //     renderer.dispose();
  //   };
  // }, []);

  return (
    <Canvas
      style={{
        width: "1200px",
        height: "550px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <OrbitControls />  
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <Model />
    </Canvas>
  );
};

export default Main;
