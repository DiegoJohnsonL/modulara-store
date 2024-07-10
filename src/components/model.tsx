import { Canvas } from "@react-three/fiber";

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
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
