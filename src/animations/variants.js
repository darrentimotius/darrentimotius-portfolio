export const slowFade = {
hidden: { opacity: 0, y: 12 },
show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
}


export const cinematicStagger = {
hidden: {},
show: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } }
}


export const subtleScale = {
hidden: { opacity: 0, scale: 0.98 },
show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}


export const pageTransition = {
initial: { opacity: 0, y: 6 },
animate: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
exit: { opacity: 0, y: -6, transition: { duration: 0.55, ease: 'easeInOut' } }
}