import { Application } from '../../Application';
import { AbstractEvent } from '../AbstractEvent';

export class LoadEvent extends AbstractEvent {
    public constructor () {
        super();

        window.addEventListener('load', e => {
            const width = document.body.clientWidth;
            Application.getVariablesProvider().set('Width', width);

            this.exec(e);
        });
    }
}
