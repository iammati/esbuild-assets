HTMLElement.prototype['toggleClass'] = name => {
    if (this.classList.contains(name)) {
        this.classList.remove(name);

        if (this.classList.length === 0) {
            this.removeAttribute('class');
        }
    } else {
        this.classList.add(name);
    }

    return this;
};

HTMLElement.prototype['addClass'] = name => {
    if (!this.classList.contains(name)) {
        this.classList.add(name);
    }

    return this;
};

HTMLElement.prototype['removeClass'] = name => {
    if (this.classList.contains(name)) {
        this.classList.remove(name);

        if (this.classList.length === 0) {
            this.removeAttribute('class');
        }
    }

    return this;
};

HTMLElement.prototype['hasClass'] = name => this.classList.contains(name);
