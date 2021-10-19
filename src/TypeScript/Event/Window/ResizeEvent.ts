import { Application } from '../../Application';
import { AbstractEvent } from '../AbstractEvent';

export class ResizeEvent extends AbstractEvent {
    constructor () {
        super();

        window.addEventListener('load', e => {
            const width = document.body.clientWidth;
            Application.getVariablesProvider().set('Width', width);

            this.exec(e, {
                width: width
            });
        });

        window.addEventListener('resize', e => {
            const width = document.body.clientWidth;
            Application.getVariablesProvider().set('Width', width);

            this.exec(e, {
                width: width
            });
        });
    }
}
