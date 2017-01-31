(function() {
	app.views.WhereGroupView = Backbone.View.extend({
						el: $('#where-clause'),
						expCount:0,
						events: {
							
						},
						addGroup: function(event) {
							this.$el.find('.addGroup')[0].remove();
							this.$el.append(new app.views.WhereGroupView().render());
						},
						initialize: function() {
							this.events = this.events || {};
							app.groupCount++;
							var eventKey = 'click #add_group' + app.groupCount;
	  						this.events[eventKey] = 'addGroup';
	  						this.delegateEvents();
							this.template = _.template($('#where-group-template').html());
						},
						render: function() {
							var self = this;
							this.$el.append(this.template({'groupCount':app.groupCount}));
							var viewi = new app.views.WhereView({el:self.$('#where-group'+app.groupCount), parent : self});
							//viewi.$el = self.$('#where-group'+groupCount);
							viewi.render();
							return this;
						}
					});
})();