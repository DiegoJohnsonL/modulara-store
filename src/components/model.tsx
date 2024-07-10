import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Model() {
  return (
    <Canvas>
      <Bot />
    </Canvas>
  );
}

function Bot() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
