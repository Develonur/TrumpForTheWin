jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 iotMessageSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"be/ehb/tftw/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"be/ehb/tftw/test/integration/pages/App",
	"be/ehb/tftw/test/integration/pages/Browser",
	"be/ehb/tftw/test/integration/pages/Master",
	"be/ehb/tftw/test/integration/pages/Detail",
	"be/ehb/tftw/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "be.ehb.tftw.view."
	});

	sap.ui.require([
		"be/ehb/tftw/test/integration/MasterJourney",
		"be/ehb/tftw/test/integration/NavigationJourney",
		"be/ehb/tftw/test/integration/NotFoundJourney",
		"be/ehb/tftw/test/integration/BusyJourney",
		"be/ehb/tftw/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});