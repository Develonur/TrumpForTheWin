jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"be/ehb/tftw/test/integration/NavigationJourneyPhone",
		"be/ehb/tftw/test/integration/NotFoundJourneyPhone",
		"be/ehb/tftw/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});