import { FC } from "react"
import cn from 'clsx'
import ThreeProvider from "./ThreeProvider"
import Box from "./Box"

interface Props {
    item: {
        id: number;
        image: string;
    };
    currentId: number;
    changeCurrentId: (newValue: number) => void;
}

const Carousel3DItem: FC<Props> = ({item, currentId, changeCurrentId}) => {
    const isActive = currentId === item.id;

    return (
        <div className={cn(isActive ? 'w-1/3 h-96' : 'w-1/5 h-60')}>
            <ThreeProvider>
                <Box position={[0, 0, 0]} item={item} currentId={currentId} changeCurrentId={changeCurrentId} />
            </ThreeProvider>
            <div
                className={cn(
                    "mx-auto mt-2 bg-light-slider dark:bg-dark-slider h-1 rounded transition-all duration-500 ease-in-out",
                    isActive ? 'w-1/2' : 'w-0'
                )}
            />
        </div>
    );
}

export default Carousel3DItem
