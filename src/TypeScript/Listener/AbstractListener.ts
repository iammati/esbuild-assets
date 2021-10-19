export default class AbstractListener {
    protected listeners = [];

    listener = e => this.listeners.forEach(listener => listener(e));
}
