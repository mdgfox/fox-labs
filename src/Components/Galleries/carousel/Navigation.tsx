import { FC } from "react";
import ArrowLeftIcon from '../../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../../Icons/ArrowRightIcon';

const Navigation: FC<{nextSlide: () => void; prevSlide: () => void; }> = ({ nextSlide, prevSlide}) => {
    return (
        <div className="mt-10 w-1/2 flex items-center gap-10 justify-center mx-auto">
            <button onClick={() => prevSlide()} className='transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button'>
                <ArrowLeftIcon fontSize={'large'}/>
            </button>
            <button onClick={() => nextSlide()} className="transition-colors duration-300 hover:text-light-button dark:hover:text-dark-button">
                <ArrowRightIcon fontSize={'large'}/>
            </button>
        </div>
    );
}

export default Navigation;
