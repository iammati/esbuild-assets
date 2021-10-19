const fn = element => {
    const rect = element.getBoundingClientRect();

    return (
        window.pageYOffset >= 0 &&
        window.pageXOffset >= 0 &&
        // use the below for proper element top/left detection rather
        // than depending on pageOffset properties
        // rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export const elementInViewport = fn;
