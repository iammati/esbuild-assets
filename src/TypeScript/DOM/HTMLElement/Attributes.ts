HTMLElement.prototype['getData'] = property => {
    if (this.dataset[property] === undefined) {
        return false;
    }

    return this.dataset[property];
};
