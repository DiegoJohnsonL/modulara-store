import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { OrbitControls, ScrollControls, SoftShadows, useScroll } from "@react-three/drei";
import { BotModel, BotModelRef } from "./bot-model";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";

export default function Scene() {
  const botModel = useRef<BotModelRef>(null);
  const scroll = useScroll();
  const stopAllAnimations = () => {
    botModel?.current?.stopAnimation("04_Sphere_bot_Attack");
  };
  const onClickOpenAnimation = () => {
    stopAllAnimations();
    botModel?.current?.playAnimation("04_Sphere_bot_Attack");
  };

  return (
    <div className="h-[70vh] w-full flex flex-col fixed inset-0 top-20 left-1/2 -translate-x-1/2 ">
      <div className="flex-1">
        <Canvas shadows camera={{ position: [0, 4, 6] }}>
          <OrbitControls enableZoom={false} />
          <directionalLight
            intensity={2}
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize={2048}
            shadow-bias={-0.0001}
          />
          <ambientLight intensity={0.5} position={[0, 2, 0]} scale={1.5} />
          <BotModel ref={botModel} />
        </Canvas>
      </div>
    </div>
  );
}
