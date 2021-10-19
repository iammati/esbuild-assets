import * as toastr from "toastr";
import { resolveIntTypeToIdentifier, Types } from "../Interface/Types";

/**
 * @description Wrapper around toastr package.
 * @todo Write custom toastr and remove third-party-dependency(?)
 */
export class Notify {
    public constructor(type: Types, title: String, description: String = '') {
        let typeText = resolveIntTypeToIdentifier(type);

        if (typeText === 'danger') {
            typeText = 'error';
        }

        toastr[typeText](title, description);
    }
}
