import { useThree } from "@react-three/fiber"
import { FC, useEffect } from "react"
import * as THREE from 'three';
import { DefaultRatio } from "./index";
import { CameraControls } from '@react-three/drei';

interface Props {
  position?: THREE.Vector3;
  focus?: THREE.Vector3;
  selectedItem: number | undefined;
}

const Rig: FC<Props> = ({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0), selectedItem }) => {
    const { scene, camera } = useThree();

    useEffect(() => {
      if(selectedItem) {
        const active = scene.getObjectByName(selectedItem.toString());
        if (active) {
          active.parent?.localToWorld(position.set(0, DefaultRatio * 0.75, 0.25))
          active.parent?.localToWorld(focus.set(0, DefaultRatio / 2, -2))
        }
        camera.lookAt(position);
      }
    }, [camera, focus, position, scene, selectedItem]);

    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  }

  export default Rig;
