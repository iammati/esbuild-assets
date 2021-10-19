export default class PageRenderer {
    /**
     * @type {string}
     * @description Determines whether the current page is a rootpage or normal page.
     */
    protected pageType: string = null;

    /**
     * @type {bool}
     * @description Whether the client scrolled inside the web-application yet.
     */
    protected hasScrolled: boolean = false

    constructor () {
        if (document.body.dataset.pagetype) {
            this.pageType = document.body.dataset.pagetype;
        }
    }

    /**
     * @function getPageType
     * @returns {string}
     */
    getPageType = (): string => this.pageType;

    /**
     * @function isBrowser
     * @description Checks whether the provided browser name is the client's current browser.
     * @param {string} browser
     * 
     * @returns {bool}
     */
    isBrowser = browser => {
        let isBrowser = null;
        browser = browser.toLowerCase();

        if (browser === 'firefox') {
            isBrowser = Boolean(navigator.userAgent.search('Firefox'));
        }

        return (isBrowser === true);
    }
}
