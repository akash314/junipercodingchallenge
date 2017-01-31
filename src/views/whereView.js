(function() {
	app.views.WhereView = Backbone.View.extend({
						count:0,
						events: {
							
						},
						addClause: function(event) {
							this.$el.find('.add')[0].remove();
							this.parent.expCount++;						
							this.$el.append(this.template({'count':this.parent.expCount}));
						},
						initialize: function(options) {
							this.parent = options.parent;
							this.events = this.events || {};
							var eventKey = 'click #add_button'+(this.parent.expCount+1);
							var eventKey = 'click .add';
	  						this.events[eventKey] = 'addClause';
	  						this.delegateEvents();
							this.template = _.template($('#where-clause-template').html());
						},
						render: function() {
							var self = this;
							this.parent.expCount++;
							this.$el.html(this.template({'count':this.parent.expCount}));
							return this;
						}
					});
})();