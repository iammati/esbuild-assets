import { ResizeEvent } from '../../Event/Window/ResizeEvent';
import { ScrollEvent } from '../../Event/Window/ScrollEvent';
import { AjaxConfig } from '../Ajax/AjaxConfig';
import { AjaxService } from '../../Service/AjaxService';
import Form from '../Components/Form';
import { Application } from '../../Application';
import { ViewResolver } from '../View/ViewResolver';
import { DependencyInjectionsFinished } from '../../Event/DependencyInjectionsFinished';

Application.getContainer().get('LoadEvent').addListener((...args) => {
    // Window / Document related events
    Application.getContainer().add('ResizeEvent', new ResizeEvent());
    Application.getContainer().add('ScrollEvent', new ScrollEvent());

    // Initialization of axios configuration and service
    Application.getContainer().add('AjaxConfig', new AjaxConfig());
    Application.getContainer().add('AjaxService', new AjaxService());

    // Components
    Application.getContainer().add('Form', new Form());

    Application.getContainer().add('ExtensionLoader', () => {
        Application.getContainer().add('ViewResolver', new ViewResolver());
    })();

    // Last event to be called
    Application.getContainer().add('DependencyInjectionsFinished', new DependencyInjectionsFinished());
});
