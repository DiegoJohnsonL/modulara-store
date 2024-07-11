import * as THREE from "three";
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useGLTF, useAnimations, useCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

type GLTFResult = GLTF & {
  nodes: {
    Leg001: THREE.SkinnedMesh;
    Leg001_1: THREE.SkinnedMesh;
    Leg001_2: THREE.SkinnedMesh;
    root_2001: THREE.Bone;
  };
  materials: {
    Sphere_Bot: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | "01_Sphere_bot_Roll"
  | "01_Sphere_bot_Roll.001"
  | "02_Sphere_bot_Run_Cycle"
  | "03_Sphere_bot_Open"
  | "03_Sphere_bot_Open.001"
  | "04_Sphere_bot_Attack"
  | "05_Sphere_bot_WalkCycle"
  | "05_Sphere_bot_WalkCycle.001"
  | "06_Sphere_bot_Run_Attack"
  | "06_Sphere_bot_Run_Attack.001"
  | "07_Sphere_bot_Jump"
  | "07_Sphere_bot_Jump.001"
  | "08_Sphere_bot_Bake_Pose"
  | "08_Sphere_bot_Bake_Pose.001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export const BotModel = forwardRef((props: JSX.IntrinsicElements["group"], ref) => {
  const group = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const { nodes, materials, animations } = useGLTF("/bot.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();

  useEffect(() => {
    actions["03_Sphere_bot_Open"]!.reset().play().paused = true;
  }, []);

  useFrame(() => {
    if (scrollYProgress !== null) {
      actions["03_Sphere_bot_Open"]!.time = actions["03_Sphere_bot_Open"]!.getClip().duration * scrollYProgress.get();
    }
  });

  const onUpdated = () => {
    const position = camera.position;
    const target = group.current!.position;
    console.log("Target Position", target);
    console.log("Camera Position", position);
  };

  useGSAP(() => {
    const target = group.current!.position;

    const tl = gsap.timeline();
    tl.to(target, {
      x: -2,
      y: -2,
      scrollTrigger: {
        trigger: "#second",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdated: onUpdated,
    })
      .to(target, {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: "#third",
          start: "top bottom",
          end: "top top",
          markers: true,
          scrub: true,
          immediateRender: false,
        },
        onUpdated: onUpdated,
      })
      .to(target, {
        x: 2,
        y: -2,
        scrollTrigger: {
          trigger: "#fourth",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
        onUpdated: onUpdated,
      });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.root_2001} />
          <group name="Sphere-Bot">
            <skinnedMesh
              name="Leg001"
              geometry={nodes.Leg001.geometry}
              material={materials.Sphere_Bot}
              skeleton={nodes.Leg001.skeleton}
            />
            <skinnedMesh
              name="Leg001_1"
              geometry={nodes.Leg001_1.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Leg001_1.skeleton}
            />
            <skinnedMesh
              name="Leg001_2"
              geometry={nodes.Leg001_2.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.Leg001_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/bot.glb");
