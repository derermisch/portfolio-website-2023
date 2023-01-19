export const determineIfMobile = () => {
    return (window.innerWidth <= 500) ? true : false
}

// export let isMobile = determineIfMobile()

// window.addEventListener("resize", () => {
//     determineIfMobile()
// })

// window.addEventListener("load", () => {
//     determineIfMobile()
// })

export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export function throttle(cb, delay = 250) {
    let shouldWait = false

    return (...args) => {
        if (shouldWait) return

        cb(...args)
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        }, delay)
    }
}

export const scrollToLocation = (locationIndex, onClickFunction = null) => {
    let goalEle = null
    switch (locationIndex) {
        case 0: {
            goalEle = document.querySelector(".home")
            break;
        }
        case 1: {
            goalEle = document.querySelector(".angebote")
            break;
        }
        case 2: {
            goalEle = document.querySelector(".kontakt")
            break;
        }
        case 3: {
            goalEle = document.querySelector(".anfahrt")
            break;
        }
    }
    if (!goalEle) return
    goalEle.scrollIntoView({ behavior: "smooth" });

    onClickFunction && onClickFunction()
    // const navBar = document.querySelector(".welcome--navHamburger")
    // navBar.click() // closes menu on mobile
}

export function getImageUrl(name) {
    return new URL(`../images/${name}.png`, import.meta.url).href
}

export async function waitForImgagesToLoad() {
    await Promise.all(Array.from(document.images).map(img => {
        if (img.complete)
            return Promise.resolve(img.naturalHeight !== 0);
        return new Promise(resolve => {
            img.addEventListener('load', () => resolve(true));
            img.addEventListener('error', () => resolve(false));
        });
    }))
}