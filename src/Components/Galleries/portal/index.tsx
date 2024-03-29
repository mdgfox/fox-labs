import { Canvas } from "@react-three/fiber";
import { FC, useMemo, useRef, useState } from "react";
import Frame from "./Frame";
import Rig from "./Rig";
import { Gltf } from '@react-three/drei';
import ArrowLeftIcon from '../../Icons/ArrowLeftIcon';

export const DefaultRatio = 1.6;

// takes from https://codesandbox.io/s/enter-portals-9m4tpc?file=/src/App.js
export const PortalGallery: FC = () => {
	const rootRef = useRef();
	const [selectedItem, setSelectedItem] = useState<number>();
	const backNavigation = useMemo(() => {
		if(!selectedItem) {
			return;
		}
		return (
			<div className="absolute z-10 left-4 top-8">
				<button onClick={() => setSelectedItem(undefined)} className='flex items-center transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button'>
					<ArrowLeftIcon fontSize={'large'} /> Back
				</button>
			</div>
		);
	}, [selectedItem, setSelectedItem]);
	return (
		<div className="h-[500px] pt-5 relative bg-light dark:text-white dark:bg-dark" ref={rootRef.current} id="cards-carousel">
			{backNavigation}
			<Canvas camera={{ fov: 75, position: [0, 0, 1.5] }} eventSource={rootRef.current} eventPrefix="client">
				<color attach="background" args={['#F1F3CE']} />
				<group position={[0, -0.8, 0]}>
					<Frame id={1} selectedItem={selectedItem} setSelectedItem={setSelectedItem} name='tea' author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
						<Gltf src='assets/3D/1.glb' rotation={[0, 0, 0]} position={[0, -2, -3]} />
					</Frame>
					<Frame id={2} selectedItem={selectedItem} setSelectedItem={setSelectedItem} name={`pick\nles`} bg="#d1d1ca" author="Omar Faruq Tawsif">
						<Gltf src='assets/3D/2.glb' scale={8} position={[0, -0.7, -2]} />
					</Frame>
					<Frame id={3} selectedItem={selectedItem} setSelectedItem={setSelectedItem} name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
						<Gltf src='assets/3D/3.glb' scale={2} position={[0, -0.8, -4]} rotation={[0, 0, 0]} />
					</Frame>
				</group>
				<Rig selectedItem={selectedItem} />
			</Canvas>
	  </div>
	);
}
