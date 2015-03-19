requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app"
    },
    "shim": {
        "jquery.alpha": ["jquery"],
        "jquery.beta": ["jquery"]
    }
});
require.config({
    // relative url from where modules will load
    baseUrl: "Scripts/",
    paths: {
        "jquery": "jquery-1.10.2"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);