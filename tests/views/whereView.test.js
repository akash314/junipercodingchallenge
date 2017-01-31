describe("WhereClauseView", function() {
	describe("constructor", function() {
		it("should exist", function() {
            var tempObj = {'html':function(){return '';}}
            var parentObj = {'expCount': 0}
            $ = sinon.stub();
            $.withArgs('#where-clause-template').returns(tempObj);
            var whereView = new app.views.WhereView({'parent':parentObj});
            expect(whereView).to.not.be.null;
        });
        
	});
});
