import { FC, useCallback, useMemo, useState } from 'react';
import Navigation from './Navigation';
import Carousel3DItem from './3D/Carouse3DItem';
import CarouselItem from './2D/CarouselItem';
import { carouselGalleryItems } from './data';

export type CarouselType = '2D' | '3D';

export const Carousel: FC<{type: CarouselType}> = ({type}) => {
    const [currentId, setCurrentId] = useState<number>(2);

    const nextSlide = useCallback(() => {
        const nextId = currentId + 1;
        const nextItem = carouselGalleryItems.some(item=> item.id === nextId);

        if(!nextItem) return;

        setCurrentId(nextId);
    }, [currentId]);

    const prevSlide = useCallback(() => {
        const prevId = currentId - 1;
        if(!prevId) return;

        const prevItem = carouselGalleryItems.some(item=> item.id === prevId);
        if(!prevItem) return;

        setCurrentId(prevId);
    }, [currentId]);

    const render = useMemo(() => {
        if(!carouselGalleryItems.length) {
            return (<div>Elements Not Found</div>);
        }
        return carouselGalleryItems.map((item) => {
            return type === '3D' ? <Carousel3DItem key={`3D-item-${item.id}`} item={item} currentId={currentId} changeCurrentId={setCurrentId} /> :
                <CarouselItem key={`2D-item-${item.id}`} item={item} currentId={currentId} changeCurrentId={setCurrentId}/>;
        });
    }, [currentId, type]);

    return (
        <section className="mt-5">
            <h2 className="text-4xl text-center text-dark-gold">{type} Carousel</h2>
            <div className="flex items-center justify-around mt-5">
                {render}
            </div>
            <Navigation nextSlide={nextSlide} prevSlide={prevSlide}/>
        </section>
    )
}
