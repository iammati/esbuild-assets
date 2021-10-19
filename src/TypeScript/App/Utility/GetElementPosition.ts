export class GetElementPosition {
    constructor (element: HTMLElement) {
        let x = 0,
            y = 0;

        if (element === undefined) {
            return {
                top: y,
                left: x
            };
        }

        while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
            x += element.offsetLeft - element.scrollLeft;
            y += element.offsetTop - element.scrollTop;
        }

        return {
            top: y,
            left: x
        };
    }
}
