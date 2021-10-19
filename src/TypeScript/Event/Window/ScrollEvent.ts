import { Application } from '../../Application';
import { AbstractEvent } from '../AbstractEvent';

export class ScrollEvent extends AbstractEvent {
    public constructor () {
        super();

        window.addEventListener('scroll', e => this.scroll(e));

        const event = document.createEvent('HTMLEvents');
        event.initEvent('scroll', true, false);
        window.dispatchEvent(event);
    }

    scroll = e => {
        if (window.scrollY != 0) {
            Application.getPageRenderer().hasScrolled = true;

            if (!document.body.classList.contains('scrolled')) {
                document.body.classList.add('scrolled');
            }
        } else {
            Application.getPageRenderer().hasScrolled = false;

            if (document.body.classList.contains('scrolled')) {
                document.body.classList.remove('scrolled');
            }
        }

        this.exec(e, {
            scrollTop: window.scrollY
        });
    }
}
