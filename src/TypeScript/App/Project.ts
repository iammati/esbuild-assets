// Registration of custom shortcuts to be added into the Container
for (
    const [ k, v ] of Object.entries(
        require('./Shortcuts')
    )
) {
    Application.getContainer().add(k, v);
}

// Initialization of Event registrations e.g. Resize-/ScrollEvent etc.
require('./Listener/LoadListener');

// Examples
// require('../Listener/Window/ResizeListener/.example');
// require('../Listener/Window/ScrollListener/.example');
