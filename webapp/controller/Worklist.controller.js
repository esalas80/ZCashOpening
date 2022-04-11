/*global location history */
sap.ui.define([
		"NAMESPACE/CashOpenin/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"NAMESPACE/CashOpenin/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("NAMESPACE.CashOpenin.controller.Worklist", {

			formatter: formatter,
			onInit : function () {
				var oViewModel;

				// Model used to manipulate control states
				oViewModel = new JSONModel({
				});
				this.setModel(oViewModel, "worklistView");
			},
			/**
			 * Event handler for navigating back.
			 * We navigate back in the browser historz
			 * @public
			 */
			onNavBack : function() {
				history.go(-1);
			},

			/* =========================================================== */
			/* internal methods                                            */
			/* =========================================================== */

			/**
			 * Shows the selected item on the object page
			 * On phones a additional history entry is created
			 * @param {sap.m.ObjectListItem} oItem selected Item
			 * @private
			 */
			_showObject : function (oItem) {
				this.getRouter().navTo("object", {
					objectId: oItem.getBindingContext().getProperty("Segmento")
				});
			}

		});
	});