import { Select } from "./Select";

export default class Form {
    public constructor() {
        const nonInitializedFormFields = document.querySelectorAll('.form-field:not(.form-initialized)') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

        nonInitializedFormFields.forEach(node => {
            node.classList.add('form-initialized');

            Array.prototype.concat(
                node.querySelectorAll('input'),
                node.querySelectorAll('textarea')
            ).forEach((subnodes: HTMLInputElement[] | HTMLTextAreaElement[]) => {
                subnodes.forEach((subnode: HTMLInputElement | HTMLTextAreaElement) => {
                    this.initField(subnode);
                });
            });
        });

        new Select();
    }

    public initField = (el: HTMLInputElement | HTMLTextAreaElement) => {
        this
            .handleFieldLabel(el)
        ;

        el.onfocus = e => this.handleEvent(e);
        el.onblur  = e => this.handleEvent(e, true);
        el.onkeyup = e => this.handleEvent(e);
    }

    protected handleEvent = (
        e: FocusEvent | KeyboardEvent,
        isBlur = false
    ) => {
        const target = (e.currentTarget as HTMLInputElement | HTMLTextAreaElement);

        // Continue only if e == (onblur || onkeyup)
        if (e instanceof FocusEvent && isBlur || e instanceof KeyboardEvent) {
            this.handleFieldError(target);
        }

        // Label handling for visual-view in frontend
        this.handleFieldLabel(target);
    }

    protected handleFieldError = (el: HTMLInputElement | HTMLTextAreaElement) => {
        const value = el.value;
        const parentEl = el.parentElement;

        if (value.length > 0) {
            parentEl.classList.contains('error') && parentEl.classList.remove('error');
        } else {
            !parentEl.classList.contains('error') && el.getAttribute('required') !== null && parentEl.classList.add('error');
        }

        return this;
    }

    protected handleFieldLabel = (el: HTMLInputElement | HTMLTextAreaElement) => {
        const value = el.value;
        const label = el.parentNode.querySelector('label') ?? null;

        if (!label) {
            return this;
        }

        if (value.length > 0 && label !== null) {
            !label.classList.contains('active') && label.classList.add('active');
        } else if (value.length == 0) {
            label.classList.contains('active') && label.classList.remove('active');
        }

        return this;
    }
}
