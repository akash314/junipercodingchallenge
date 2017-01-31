(function() {
 app.views.QueryView = Backbone.View.extend({
						el: $('#json-container'),
						initialize: function() {
							
						},
						render: function() {
							var self = this;
							self.$el.html('');
							var jsonOb = this.model.toJSON();
							this.$el.html('<pre>'+JSON.stringify(jsonOb,null,2)+'</pre>');
							return this;
						}
					});
})();