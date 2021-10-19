export default class AbstractListener {
    constructor () {
        this.listeners = [];
    }

    listener = e => this.listeners.forEach(listener => listener(e));
}
