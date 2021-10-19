import { resolveIntTypeToIdentifier } from "../Interface/Types";
import { Options } from "../Interface/Modal/Options";

export class Modal {
    public constructor(title: string, description: string, options: Options) {
        const htmls = {
            modal: '',
            closeButton: '',
            successButton: '',
            abortButton: '',
        };

        let id = `modal-${options.id}`;
        let classes = 'modal fade';
        let size = '';

        if (!options.isDialog) {
            classes += ' layout-default';
        }

        if (options.closeOnButtonClick === true || typeof options.closeOnButtonClick == 'undefined') {
            classes += ' close-on-click';
        }

        if (options.hasClose) {
            htmls.closeButton = `
<button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>`
                ;
        }

        const callbacks = options.callbacks;

        if (callbacks.abort) {
            htmls.abortButton = `<button type="button" class="modal-abort-btn btn btn-${resolveIntTypeToIdentifier(callbacks.abort.type)} waves-effect waves-light" aria-label="Abort">${callbacks.abort.text}</button>`;
        }

        if (callbacks.success) {
            htmls.successButton = `<button type="button" class="modal-success-btn btn btn-${resolveIntTypeToIdentifier(callbacks.success.type)} waves-effect waves-light" aria-label="Success">${callbacks.success.text}</button>`;
        }

        htmls.modal = `
<div class="${classes}" tabindex="-1" role="dialog" aria-labelledy="${id}-label" aria-hidden="true">
    <div class="modal-dialog${size}" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                ${htmls.closeButton}
            </div>

            <div class="modal-body">
                ${description}
            </div>

            <div class="modal-footer">
                ${htmls.abortButton}
                ${htmls.successButton}
            </div>
        </div>
    </div>
</div>
`;

        document.body.insertAdjacentHTML('beforeend', htmls.modal);

        const modal = document.querySelector('.modal');
        document.querySelector('html').classList.add('show-modal');

        setTimeout(() => {
            modal.classList.add('show');

            // register callbacks
            if (callbacks.abort) {
                (document.querySelector('body > .modal .modal-abort-btn') as HTMLButtonElement).onclick = e => {
                    this.closeModal();

                    if (callbacks.abort.fn) {
                        callbacks.abort.fn(e);
                    }
                };
            }

            if (callbacks.success) {
                (document.querySelector('body > .modal .modal-success-btn') as HTMLButtonElement).onclick = e => {
                    this.closeModal();

                    if (callbacks.success.fn) {
                        callbacks.success.fn(e);
                    }
                };
            }
        }, 1);
    }

    closeModal = () => {
        const modal = document.querySelector('body > .modal');

        if (!modal) {
            return;
        }

        if (modal.classList.contains('close-on-click')) {
            modal.classList.remove('show');

            setTimeout(() => modal.parentNode.removeChild(modal), 600);

            const html = document.querySelector('html');

            if (html.classList.contains('show-modal')) {
                html.classList.remove('show-modal');
            }
        }
    }
}
