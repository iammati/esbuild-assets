export class SlideUp {
    public constructor(element: HTMLElement, duration: number = 500) {
        return new Promise<Boolean>((resolve, reject) => {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = 'height, margin, padding';
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight;
            element.style.overflow = 'hidden';

            [
                'height',
                'paddingTop',
                'paddingBottom',
                'marginTop',
                'marginBottom'
            ].forEach(property => element.style[property] = 0);

            window.setTimeout(() => {
                element.style.display = 'none';

                [
                    'height',
                    'padding-top',
                    'padding-bottom',
                    'margin-bottom',
                    'overflow',
                    'transition-duration',
                    'transition-property'
                ].forEach(property => element.style.removeProperty(property));

                resolve(false);
            }, duration);
        });
    }
}
