(function() {
	app.models.Query = Backbone.Model.extend({
						defaults: function() {
							return {
								
							}
						},
						validateForm : function(){
							var attrs = this.attributes;
							var epochregex = /^\d{13}/;
							var errors=[];
							if (!attrs.start_time || !epochregex.test(attrs.start_time)) {
						        errors.push({name: 'start-time', message: '*Invalid start time.'});
						    }

						    if (!attrs.end_time || !epochregex.test(attrs.end_time)) {
						        errors.push({name: 'end-time', message: '*Invalid end time.'});
						    }

						    if (attrs.start_time && attrs.end_time && attrs.start_time>attrs.end_time) {
						        errors.push({name: 'end-time', message: '*End time cannot be before start time.'});
						    }


						    if (!attrs.table_name) {
						        errors.push({name: 'tablename', message: '*Invalid table name.'});
						    }
						    return errors;
						}
					});
})();