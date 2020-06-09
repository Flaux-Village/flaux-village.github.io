jQuery(function($){
	jQuery.datepicker.setDefaults($.datepicker.regional['fr']);
	jQuery('#datedebut,#datefin').mousedown(function(){
		jQuery("#datedebut,#datefin").datepicker({minDate:'-36500', maxDate:'+36500', dateFormat: 'dd-mm-yy', firstDay:1, cgangeFirstDay : false }).attr("readonly","readonly");
	});

	$('#menu_recherche').submit(function() {
		var action = $(this).attr("action");

		if( $('#datedebut').val() ) {
			action += '/(startdate)/' + $('#datedebut').val().split('/').join('-');
		}
		if( $('#datefin').val() ) {
			action += '/(enddate)/' +  $('#datefin').val().split('/').join('-');
		}

		$(this).attr("action", action );
		return true;
	});
});