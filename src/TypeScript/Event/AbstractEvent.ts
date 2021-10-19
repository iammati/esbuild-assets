export class AbstractEvent {
    protected listeners = [];

    addListener = (fn: Function) => this.listeners.push(fn);

    getListeners = () => this.listeners;

    exec = (...args) => this.listeners.forEach(listener => listener(...args));
}
