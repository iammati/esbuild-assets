export default class PageRenderer {
    /**
     * @type {bool}
     * @description Rootpage state of the current TYPO3 page.
     */
    pageType = null;

    /**
     * @type {bool}
     * @description Whether the client scrolled on the web-application yet.
     */
    hasScrolled = false

    constructor () {
        // if (document.body.dataset.pagetype) {
        //     this.pageType = document.body.dataset.pagetype;
        // }
    }

    /**
     * @function isRootPage
     * @description Checks if the page is a root page.
     * 
     * @returns {bool}
     */
    isRootPage = () => this.rootPage;

    /**
     * @function isHeaderActive
     * @description Checks if the header is active.
     * 
     * @returns {bool}
     */
    isHeaderActive = () => Elements.$header.hasClass('active')

    /**
     * @function isBrowser
     * @description Checks whether the provided browser name is the client's current browser.
     * 
     * @param {string} browser
     * 
     * @returns {bool}
     */
    isBrowser = browser => {
        let isBrowser = false;
        browser = browser.toLowerCase();

        switch (browser) {
        case 'firefox':
            isBrowser = navigator.userAgent.search('Firefox');
            break;
        default:
            break;
        }

        return (isBrowser === true);
    }
}
