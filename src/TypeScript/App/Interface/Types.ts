export enum Types {
    WARNING,
    INFO,
    PRIMARY,
    SUCCESS,
    DANGER,
}

export function resolveIntTypeToIdentifier(type: number) {
    let identifier = '';

    switch (type) {
        case 0:
            identifier = 'warning';
            break;
        case 1:
            identifier = 'info';
            break;
        case 2:
            identifier = 'primary';
            break;
        case 3:
            identifier = 'success';
            break;
        case 4:
            identifier = 'danger';
            break;
        default:
            break;
    }

    return identifier;
}
