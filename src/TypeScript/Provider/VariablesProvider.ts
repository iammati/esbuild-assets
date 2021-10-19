export default class VariablesProvider {
    public storage = {
        Breakpoint: 'xs'
    };

    getStorage = (key: any = null): Object => {
        if (key === null) {
            return this.storage;
        }

        return this.storage[key];
    };

    set = (identifier: any, value: String) => this.storage[identifier] = value;

    get = (identifier: any) => this.storage[identifier];
}
