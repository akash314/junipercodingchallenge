describe("QueryView", function() {
    it("should exist", function() {
        // $ = sinon.stub();
        // var tempObj = {'html':function(){return '';}}
        // $.withArgs('#where-group-template').returns(tempObj);
        var queryView = new app.views.QueryView();
        expect(queryView).to.not.be.null;
    });
    it("without model", function() {
    	 var queryView = new app.views.QueryView();
    	 expect(function () {
                queryView.render();
            }).to.throw(Error);
    });
    it("with model", function() {
    	 var queryView = new app.views.QueryView({'model':new app.models.Query()});
    	 expect(function () {
                queryView.render();
            }).to.not.throw(Error);
    });
    
});
