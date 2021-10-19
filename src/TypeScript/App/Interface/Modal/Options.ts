import { Types } from "../Types";

export interface Callback {
    text: String;
    type: Types;
    fn?: Function;
}

export interface Options {
    id: String;
    isDialog?: false;
    closeOnButtonClick?: true;
    hasClose?: true;
    callbacks: {
        abort?: {
            text: String;
            type: Types;
            fn?: Function;
        },
        success: {
            text: String;
            type: Types;
            fn?: Function;
        };
    };
}
