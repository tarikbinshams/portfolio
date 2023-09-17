import React, { Suspense } from "react";
import { Canvas, useLoader  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../common/Loader";

// const Earth = () => {
//   const earth = useGLTF("./models/DC_Logo_no_bg.glb");

//   return (
//     <primitive object={earth.scene} scale={2} position-y={0} rotation-x={0} />
//   );
// };

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={true}
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 100,
        position: [-6, 3, 2],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 3.25}

        />
        {/* <Earth /> */}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
