sap.ui.define([
		"NAMESPACE/CashOpenin/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("NAMESPACE.CashOpenin.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);