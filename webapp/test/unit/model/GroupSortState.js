sap.ui.define([
		"be/ehb/tftw/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("longitude").length, 1, "The sorting by longitude returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("messageType").length, 1, "The sorting by messageType returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("longitude").length, 1, "The group by longitude returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to longitude if the user groupes by longitude", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("longitude");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "longitude", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by messageType and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "longitude");

		this.oGroupSortState.sort("messageType");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});