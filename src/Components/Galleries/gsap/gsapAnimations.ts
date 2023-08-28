import { gsap, Power3 } from 'gsap';
import TweenTarget = gsap.TweenTarget;

export const fadeIn = (target?: TweenTarget, duration = 1) => {
    if(target) {
        gsap.to(target, { duration, opacity: 1, delay: 1 });
    }
};

export const fadeOut = (target?: TweenTarget, duration = 1) => {
    if(target) {
        gsap.to(target, { duration, opacity: 0 });
    }
};

export const slideLeft = (target?: TweenTarget, duration = 1, multiplied = 1) => {
    if(target) {
        gsap.to(target, { duration, x: -340 * multiplied, ease: Power3.easeOut });
    }

};

export const slideRight = (target?: TweenTarget, duration = 1, multiplied = 1) => {
    if(target) {
        gsap.to(target, { duration, x: 340 * multiplied, ease: Power3.easeOut});
    }
};

export const scale = (target?: TweenTarget, duration = 1) => {
    if(target) {
        gsap.from(target, { duration, scale: 1.2, ease: Power3.easeOut });
    }
};
