import Container from './Core/Container';
import VariablesProvider from './Provider/VariablesProvider';
import PageRenderer from './Renderer/PageRenderer';

export default class Bootstrap {
    public constructor () {
        // Instancing and setting the global namespace Application inside the window object.
        window.Application = new class Application {
            protected container;
            protected variablesProvider;
            protected pageRenderer;
            protected page;

            constructor () {
                this.container = new Container();

                // Variables
                this.variablesProvider = new VariablesProvider();
                this.getContainer().add('VariablesProvider', this.variablesProvider);

                // Renderers
                this.pageRenderer = new PageRenderer();
                this.getContainer().add('PageRenderer', this.page);
            }

            getContainer = () => this.container;

            getVariablesProvider = () => this.variablesProvider;

            getPageRenderer = () => this.pageRenderer;
        }();
    }
}
