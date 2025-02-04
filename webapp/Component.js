sap.ui.define([
    "sap/ui/core/UIComponent",
    "app/mainapp/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("app.mainapp.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            jQuery.sap.registerModulePath("my.component", "https://93ba30e2trial.launchpad.cfapps.us10.hana.ondemand.com/2506e997-6061-4052-8fe4-520408db9a31.appdemoplugin.appdemoplugin");
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});