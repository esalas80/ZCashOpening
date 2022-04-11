/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"NAMESPACE/CashOpenin/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NAMESPACE/CashOpenin/test/integration/pages/Worklist",
	"NAMESPACE/CashOpenin/test/integration/pages/Object",
	"NAMESPACE/CashOpenin/test/integration/pages/NotFound",
	"NAMESPACE/CashOpenin/test/integration/pages/Browser",
	"NAMESPACE/CashOpenin/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NAMESPACE.CashOpenin.view."
	});

	sap.ui.require([
		"NAMESPACE/CashOpenin/test/integration/WorklistJourney",
		"NAMESPACE/CashOpenin/test/integration/ObjectJourney",
		"NAMESPACE/CashOpenin/test/integration/NavigationJourney",
		"NAMESPACE/CashOpenin/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});