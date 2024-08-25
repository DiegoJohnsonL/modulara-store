import { Canvas } from "@react-three/fiber";
import { BotModel } from "./bot-model";

export default function Scene() {
  return (
    <>
      <div className="h-screen w-screen pointer-events-none fixed">
        <Canvas
          camera={{ position: [0, 4, 6] }}
          className="w-full h-full fixed top-0"
          style={{
            pointerEvents: "none",
          }}
        >
          <directionalLight
            intensity={2}
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize={2048}
            shadow-bias={-0.0001}
          />
          <ambientLight intensity={0.5} position={[0, 2, 0]} scale={1.5} />
          <BotModel />
        </Canvas>
      </div>
      <div id="first">
        <h1 className=" h-screen text-2xl">SECTION 1</h1>
      </div>
      <div id="second">
        <h1 className="h-screen text-2xl">SECTION 2</h1>
      </div>
      <div id="third">
        <h1 className=" h-screen text-2xl">SECTION 3</h1>
      </div>
      <div id="fourth">
        <h1 className=" h-screen text-2xl">SECTION 4</h1>
      </div>
    </>
  );
}
