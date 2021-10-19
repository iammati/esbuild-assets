import Bootstrap from './Bootstrap';

declare global {
    interface Window {
        // frontend-assets - bootstrapping
        BOOTTIME_START: any;
        BOOTTIME_END: any;
        MEASURED_TIME: any;

        // frontend-assets - application
        Application: any;
        Container: any;

        // project - constants
        START_DATE: any;
        VIEW: any;
        feUser: any;
    }
}

window.BOOTTIME_START = performance.now();
new Bootstrap();
window.BOOTTIME_END = performance.now();
window.MEASURED_TIME = (Math.round(((window.BOOTTIME_END - window.BOOTTIME_START) + Number.EPSILON) * 100) / 100) + 'ms';

console.log(window.MEASURED_TIME);

export const Application = window.Application;

require('./Project');
