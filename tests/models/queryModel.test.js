describe("QueryModel", function() {
    it("should exist", function() {
        var queryModel = new app.models.Query();
        expect(queryModel).to.not.be.null;
    });
    it("invalid model", function() {
        var queryModel = new app.models.Query();
        var errors = queryModel.validateForm();
        expect(errors).to.not.be.empty;
    });

    it("valid model", function() {
        var queryModel = new app.models.Query();
        queryModel.set('table_name', 'tablename');
		queryModel.set('start_time', 1485832388000);
		queryModel.set('end_time', 1485832488000);
		var errors = queryModel.validateForm();
        expect(errors).to.be.empty;
    });
	
});