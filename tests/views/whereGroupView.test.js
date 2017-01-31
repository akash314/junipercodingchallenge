describe("WhereGroupView", function() {
  	
  	 var grouptemphtml = '<fieldset><legend>Clause <%=groupCount%></legend><div id="where-group<%=groupCount%>" class="where-group"> </div></fieldset><input type="button" class = "addGroup" id="add_group<%=groupCount%>" value="Add Group" /><br></div>';
  	 var clausetemphtml = '<div class="clause"><select class="attr_sel"><option value="start_time">start_time</option><option value="end_time">end_time</option><option value="source_vn">source_vn</option><option value="source_port">source_port</option><option value="destination_vn">destination_vn</option><option value="destination_port">destination_port</option></select><select class="op_sel"><option value="=">=</option>\
			  <option value="!=">!=</option></select><input type="text" class="attr_val" /><input type="button" class = "add" id="add_button<%=count%>" value="Add" /><br></div>'
  	 
  	 beforeEach(function () {
        $ = sinon.stub();
	    var tempObj = {'html':function(){return '';}}
	    $.withArgs('#where-group-template').returns(tempObj);
    });
  	

    it("should exist", function() {
    	var whereGroup = new app.views.WhereGroupView();
        expect(whereGroup).to.not.be.null;
    });

    it("should render", function() {
    	var whereGroup = new app.views.WhereGroupView();
    	var tempObj = {'html':function(){return '';}}
    	$.withArgs('#where-clause-template').returns(tempObj);
        whereGroup.render();
    });
	
});
