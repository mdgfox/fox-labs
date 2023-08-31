import { FC } from "react"
import cn from 'clsx'

interface Props {
    item: {
        id: number;
        image: string;
    };
    currentId: number;
    changeCurrentId: (newValue: number) => void;
}

const CarouselItem: FC<Props> = ({item, currentId, changeCurrentId}) => {
    const isActive = currentId === item.id;

    return (
        <div className={
            cn("mx-14",
                isActive ? 'w-1/2' : 'w-1/4',
            )
        }>
            <button onClick={() => changeCurrentId(item.id)}>
                <img className="rounded-xl shadow-lg owerflow-hidden" src={item.image} alt='' width={700} height={394}/>
            </button>
            <div
                className={cn(
                    "mx-auto mt-2 bg-light-slider dark:bg-dark-slider h-1 rounded transition-all duration-500 ease-in-out",
                    isActive ? 'w-1/2' : 'w-0'
                )}
            />
        </div>


    );
}

export default CarouselItem
