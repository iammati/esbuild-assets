export class Select {
    protected fields = document.querySelectorAll('.form-field.form-select:not(.form-select-initialized)') as NodeListOf<HTMLDivElement>;

    public constructor() {
        if (!this.fields) {
            return;
        }

        this.fields.forEach((el: HTMLDivElement) => {
            el.classList.add('form-select-initialized');

            this
                .generateItemsByOption(el)
                .registerInputClickHandler(el)
            ;
        });
    }

    protected generateItemsByOption(el: HTMLDivElement): this {
        const select = el.querySelector('select');

        const divItems = document.createElement('div');
        divItems.classList.add('items');

        const options = select.querySelectorAll('option') as NodeListOf<HTMLOptionElement>;
        options.forEach((option: HTMLOptionElement) => {
            const divItem = document.createElement('div');

            const value = option.value;
            const text = option.textContent.trim();

            divItem.classList.add('item');
            divItem.setAttribute('data-value', value);
            divItem.innerText = text;

            divItem.onclick = e => {
                const clickedItem = e.currentTarget as HTMLDivElement;
                const input = clickedItem.parentNode.parentNode.querySelector('input');

                options.forEach((option: HTMLOptionElement) => {
                    if (option.value === clickedItem.getAttribute('data-value')) {
                        option.selected = true;
                        option.setAttribute('selected', '');

                        input.value = option.textContent.trim();
                    } else if (option.hasAttribute('selected')) {
                        option.removeAttribute('selected');
                    }
                });
            };

            divItems.appendChild(divItem);
        });

        select.insertAdjacentElement('beforebegin', divItems);

        return this;
    }

    protected registerInputClickHandler(el: HTMLDivElement): this {
        const input = el.parentNode.querySelector('input.form-select-toggler') as HTMLInputElement;

        input.onfocus = e => {
            const target = e.currentTarget as HTMLInputElement;

            const field = target.parentNode as HTMLDivElement;
            field.classList.add('form-select-active');
        };

        input.onblur = e => {
            const target = e.currentTarget as HTMLInputElement;

            const field = target.parentNode as HTMLDivElement;
            field.classList.remove('form-select-active');
        };

        return this;
    }

    public selectValue(select: HTMLSelectElement, value: any) {
        const field = select.parentNode;
        const input = field.querySelector('.form-select-toggler') as HTMLInputElement;
        const items = field.querySelectorAll('.items .item') as NodeListOf<HTMLDivElement>;

        select.value = value;

        items.forEach((item: HTMLDivElement) => {
            if (item.getAttribute('data-value') == value) {
                input.value = item.textContent;
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}
