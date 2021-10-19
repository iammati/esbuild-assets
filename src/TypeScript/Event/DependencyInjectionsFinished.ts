import { ResizeListener } from "../App/Listener/ResizeListener";
import { Application } from "../Application";

export class DependencyInjectionsFinished {
    public constructor() {
        new ResizeListener();

        Application.getContainer().get('ResizeEvent').exec(null, {
            width: Application.getVariablesProvider().getStorage().Width
        });
    }
}
