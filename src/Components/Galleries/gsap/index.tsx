import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { gapGalleryProfiles } from './data';
import React from 'react';
import './styles.scss';
import ArrowRightIcon from '../../Icons/ArrowRightIcon';
import { fadeIn, fadeOut, scale, slideLeft, slideRight } from './gsapAnimations';
import ArrowLeftIcon from '../../Icons/ArrowLeftIcon';

export const GsapGallery: React.FC = () => {
    const [activeState, setActiveState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
    });

    // @ts-ignore
    let imageListRef: HTMLUListElement | null = useRef(null);
    // @ts-ignore
    let contentListRef: HTMLUListElement | null = useRef(null);


    useEffect(() => {
        const target = contentListRef?.children[0];
        target && gsap.to(target, { duration: 0, opacity: 1 });
    }, []);


    const nextSlide = () => {
        if (imageListRef?.children[0].classList.contains('activeee')) {
            setActiveState({ isActive1: false, isActive2: true, isActive3: false });

            slideLeft(imageListRef.children[0]);
            slideLeft(imageListRef.children[1]);
            scale(imageListRef.children[1]);
            slideLeft(imageListRef.children[2]);
            slideLeft(imageListRef.children[2], 0);

            fadeOut(contentListRef?.children[0]);
            fadeIn( contentListRef?.children[1]);
        } else if (imageListRef?.children[1].classList.contains('activeee')) {
            setActiveState({ isActive1: false, isActive2: false, isActive3: true });

            slideRight(imageListRef.children[0]);
            slideLeft(imageListRef.children[1], 1, 2);
            slideLeft(imageListRef.children[2], 1, 2);
            scale(imageListRef.children[2]);

            fadeOut(contentListRef?.children[1]);
            fadeIn(contentListRef?.children[2]);
        } else if (imageListRef?.children[2].classList.contains('activeee')) {
            setActiveState({ isActive1: true, isActive2: false, isActive3: false });

            slideLeft(imageListRef.children[2], 1, 3);
            slideLeft(imageListRef.children[0], 1, 0);
            slideLeft(imageListRef.children[1], 0, 0);
            scale(imageListRef.children[0], 1);

            fadeOut(contentListRef?.children[2]);
            fadeIn(contentListRef?.children[0]);
        }
    };

    const prevSlide = () => {
        if (imageListRef?.children[0].classList.contains('activeee')) {
            setActiveState({ isActive1: false, isActive2: false, isActive3: true });

            slideLeft(imageListRef.children[2], 0, 3);
            slideLeft(imageListRef.children[2], 1, 2);
            scale(imageListRef.children[2], 1);
            slideRight(imageListRef.children[0], 1);
            slideRight(imageListRef.children[1], 1);

            fadeOut(contentListRef?.children[0]);
            fadeIn(contentListRef?.children[2]);
        } else if (imageListRef?.children[1].classList.contains('activeee')) {
            setActiveState({ isActive1: true, isActive2: false, isActive3: false });

            slideLeft(imageListRef.children[0], 0);
            slideRight(imageListRef.children[0], 1, 0);
            slideRight(imageListRef.children[1], 1, 0);
            slideRight(imageListRef.children[2], 1, 2);
            scale(imageListRef.children[0]);

            fadeOut(contentListRef?.children[1]);
            fadeIn(contentListRef?.children[0]);
        } else if (imageListRef?.children[2].classList.contains('activeee')) {
            setActiveState({ isActive1: false, isActive2: true, isActive3: false });

            slideLeft(imageListRef.children[2], 1);
            slideLeft(imageListRef.children[1], 0, 2);
            slideLeft(imageListRef.children[1], 1);
            scale(imageListRef.children[1]);

            fadeOut(contentListRef?.children[2]);
            fadeIn(contentListRef?.children[1]);
        }
    };

    return (
        <div className='gallery-container'>
            <div onClick={prevSlide} className='arrows left'>
                <ArrowLeftIcon/>
            </div>
            <div className='inner'>
                <div className='t-image'>
                    <ul ref={(el) => (imageListRef = el)}>
                        <li className={activeState.isActive1 ? "activeee" : ""}>
                            <img src={gapGalleryProfiles[0].image} alt={gapGalleryProfiles[0].image} />
                        </li>
                        <li className={activeState.isActive2 ? "activeee" : ""}>
                            <img src={gapGalleryProfiles[1].image} alt={gapGalleryProfiles[1].image} />
                        </li>
                        <li className={activeState.isActive3 ? "activeee" : ""}>
                            <img src={gapGalleryProfiles[2].image} alt={gapGalleryProfiles[2].image} />
                        </li>
                    </ul>
                </div>
                <div className='t-content'>
                    <ul ref={(el) => (contentListRef = el)}>
                        <li className={activeState.isActive1 ? "activeeee" : ""}>
                            <div className="content-inner">
                                <p className="quote">{gapGalleryProfiles[0].quote}</p>
                                <h3 className="name">{gapGalleryProfiles[0].name}</h3>
                                <h4 className="title">{gapGalleryProfiles[0].title}</h4>
                            </div>
                        </li>
                        <li className={activeState.isActive2 ? "activeee" : ""}>
                            <div className="content-inner">
                                <p className="quote">{gapGalleryProfiles[1].quote}</p>
                                <h3 className="name">{gapGalleryProfiles[1].name}</h3>
                                <h4 className="title">{gapGalleryProfiles[1].title}</h4>
                            </div>
                        </li>
                        <li className={activeState.isActive3 ? "activeeee" : ""}>
                            <div className="content-inner">
                                <p className="quote">{gapGalleryProfiles[2].quote}</p>
                                <h3 className="name">{gapGalleryProfiles[2].name}</h3>
                                <h4 className="title">{gapGalleryProfiles[2].title}</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div onClick={nextSlide} className='arrows right'>
                <ArrowRightIcon/>
            </div>
        </div>
    );
};
