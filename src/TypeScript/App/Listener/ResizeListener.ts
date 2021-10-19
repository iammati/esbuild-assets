import { Application } from "../../Application";

export class ResizeListener {
    public constructor() {
        Application.getContainer().get('ResizeEvent').addListener(
            (...args) => {
                // The event itself
                const e = args[0];

                // Additional Data
                const additionalData = args[1];
                const width = additionalData['width'];

                let __breakpoint = 'xs';

                // Read here more about the difference of the 0.02px-gap to the full rounded actual Breakpoints
                // https://stackoverflow.com/a/51567792/12100192

                if (width >= 575.98) {
                    __breakpoint = 'sm';
                }

                if (width >= 767.98) {
                    __breakpoint = 'md';
                }

                if (width >= 991.98) {
                    __breakpoint = 'lg';
                }

                if (width >= 1199.98) {
                    __breakpoint = 'xl';
                }

                if (width >= 1399.98) {
                    __breakpoint = 'xxl';
                }

                Application.getVariablesProvider().set('Breakpoint', __breakpoint);
            }
        );
    }
}
