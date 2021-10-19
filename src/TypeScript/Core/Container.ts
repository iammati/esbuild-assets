import { LoadEvent } from '../Event/DOM/LoadEvent';

export default class Container {
    protected instances;

    public constructor () {
        if (typeof window.Container != 'undefined') {
            return window.Container;
        }

        // Container Instances
        this.instances = {};

        // Event-Registrations
        this.add('LoadEvent', new LoadEvent());

        window.Container = {
            instances: this.instances
        };
    }

    get = identifier => this.instances[identifier];

    add = (identifier, instance) => {
        if (typeof this.instances[identifier] != 'undefined') {
            if (this.instances[identifier] == instance) {
                return this.instances[identifier];
            }

            return console.error(
                'Container -> The identifier "' +
                identifier +
                '" has already registered for the instance: ',
                this.instances[identifier]
            );
        }

        this.instances[identifier] = instance;

        window.Container = {
            instances: this.instances
        };

        return instance;
    }
}
