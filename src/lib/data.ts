// Framer Motion Variants
export const FADE = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition:{
            type: 'spring',
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
    }
}
export const SLIDE_LEFT = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition:{
            type: 'spring',
            duration: 1,
            once:true
        }
    },
    exit: {
        opacity: 0,
        x: 100,
    }
}
export const SLIDE_RIGHT = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition:{
            type: 'spring',
            duration: 1,
            once:true
        }
    },
    exit: {
        opacity: 0,
        x: -100,
    }
}
export const SCALE_UP = {
    hidden: {
        opacity: 0,
        scale: 0.7,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition:{
            type: 'spring',
            duration: 1,
            once:true
        }
    },
    exit: {
        opacity: 0,
        scale: 0.7,
    }
}