import { SlideDown } from './SlideDown';
import { SlideUp } from './SlideUp';

export class SlideToggle {
    public constructor (element: HTMLElement, duration: number = 500) {
        if (window.getComputedStyle(element).display === 'none') {
            return new SlideDown(element, duration);
        }

        return new SlideUp(element, duration) as Promise<Boolean>;
    }
}
