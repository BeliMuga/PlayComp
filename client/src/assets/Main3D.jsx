import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Platform3D.jsx";

function Main3D() {
  return (
    <>
      <title>GLB Model</title>
      <main className="px-5">
        <div className="border-2 h-[100vh] my-5 rounded-lg">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              fov={75}
              position={[1.203, 7.629, 20]}
              resolution={1024}
            />
            <CameraControls />
            <ambientLight intensity={0.5} />
            <Suspense>
              <Model></Model>
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default Main3D;

// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// import { useEffect } from "react";

// const loader = new GLTFLoader();

// function Main3D() {
//   loader.load(
//     "platform3D.glb",
//     function (gltf) {
//       scene.add(gltf.scene);
//     },
//     undefined,
//     function (error) {
//       console.error(error);
//     }
//   );
//   //   useEffect(() => {
//   //     const scene = new THREE.Scene();
//   //     const renderer = new THREE.WebGLRenderer({
//   //       antialias: true,
//   //     });
//   //     renderer.setSize(
//   //       window.innerWidth,
//   //       window.innerHeight
//   //     );
//   //     document.body.appendChild(
//   //       renderer.domElement
//   //     );

//   //     // Load the model as binary data to avoid file loading issues
//   //     fetch("/models/scene.glb")
//   //       .then((res) => {
//   //         if (!res.ok) {
//   //           throw new Error(
//   //             `HTTP error! Status: ${res.status}`
//   //           );
//   //         }
//   //         return res.arrayBuffer();
//   //       })
//   //       .then((data) => {
//   //         const loader = new GLTFLoader();
//   //         loader.parse(data, "", (gltf) => {
//   //           console.log(
//   //             "✅ Model Loaded Successfully:",
//   //             gltf
//   //           );

//   //           // Add the model to the scene
//   //           scene.add(gltf.scene);

//   //           // Use the model's camera if available
//   //           const modelCamera =
//   //             gltf.cameras.length > 0
//   //               ? gltf.cameras[0]
//   //               : null;
//   //           if (modelCamera) {
//   //             camera = modelCamera;
//   //           }

//   //           // Adjust model position if needed
//   //           gltf.scene.position.set(0, -1, 0); // Move it slightly down
//   //         });
//   //       })
//   //       .catch((error) =>
//   //         console.error(
//   //           "❌ GLB Loading Error:",
//   //           error
//   //         )
//   //       );

//   //     // Fallback Camera (only used if no camera is in the GLB)
//   //     const defaultCamera =
//   //       new THREE.PerspectiveCamera(
//   //         75,
//   //         window.innerWidth / window.innerHeight,
//   //         0.1,
//   //         100
//   //       );
//   //     defaultCamera.position.set(0, 2, 10);
//   //   }, []);

//   return <div>Main3D</div>;
// }

// export default Main3D;
