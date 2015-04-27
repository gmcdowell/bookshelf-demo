var App = require('./app');

App.listen(App.get("port"), function () {
    console.log("Logmate API running on port: " + App.get("port"));
});


