import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense } from "react";

interface Props {
    children: React.ReactNode;
}

const ThreeProvider: FC<Props> = ({children}) => {
    return(
        <Canvas camera={{ far: 100, position: [0, 0, 1.8]}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                {children}
            </Suspense>

        </Canvas>
    );
}

export default ThreeProvider;
