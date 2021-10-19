import { SlideToggle } from '../Animations/SlideToggle';
import { GetElementPosition } from '../Utility/GetElementPosition';

export class Accordions {
    protected accordions = document.querySelectorAll('.accordion') as NodeListOf<HTMLElement>;

    public constructor() {
        this.accordions.forEach((accordion: HTMLElement) => {
            const top = accordion.querySelector('.top') as HTMLElement;

            top.onclick = e => {
                const bottom = (e.currentTarget as HTMLElement).parentNode.querySelector('.bottom') as HTMLElement;

                (new SlideToggle(bottom) as Promise<any>).finally(
                    () => {
                        const top = 0;
                        // const top = new GetElementPosition(bottom)['top'];

                        if (top !== 0) {
                            window.scroll(0, (top - 150));

                            // setTimeout(() => {
                            //     window.scroll(0, (top - 150))
                            // }, 500);
                        }
                    }
                );
            };
        });
    }
}
