(function($) {
				var query = new app.models.Query();
				
				

				app.groupCount = 0;
				
				var applyQtip = function(id, message){
					$('#'+id).qtip({ // Grab some elements to apply the tooltip to
					    content: {
					        text: message
					    }
					})
				}

				
				$(document).ready(function() {
					
					var whereGroupView = new app.views.WhereGroupView();
					whereGroupView.render();
					applyQtip('start-time', 'Start Time in UNIX epoch format');
					applyQtip('end-time', 'End Time in UNIX epoch format');
					applyQtip('tablename', 'Table name used for the query');

					
					$("#q_button").click(function (){

						query.set('table_name', $('#tablename').val());
						query.set('start_time', $('#start-time').val());
						query.set('end_time', $('#end-time').val());
						var sel=[];
						_.each($('#select input'),function(ele){
							if(ele.checked)
								sel.push(ele.value)
						});
						var where = [], groups = [];
						$.each( $('.where-group'), function(i, group) {
							$('div', group).each(function(j,ele) {
						   			var clause = {};
						   			clause['name']=$('.attr_sel',ele).val();
						   			clause['value']=$('.attr_val',ele).val();
						            clause['operator']=$('.op_sel',ele).val();
						            groups.push(clause);
						   });
						   where.push(groups);
						   groups=[];
						});
						query.set('where', where);
						query.set('select_fields', sel);
						var errors = query.validateForm();
						if(errors.length>0){
							_.each(errors, function (error) {
					            var controlGroup = $('#' + error.name);
					            controlGroup.addClass('error');
					            controlGroup.next().text(error.message);
					        }, this);
						}
						else{
							$('.error').removeClass('error');
        					$('.help').text('');
							new app.views.QueryView({model:query}).render();
						}
					});
				});
				
			})(jQuery);