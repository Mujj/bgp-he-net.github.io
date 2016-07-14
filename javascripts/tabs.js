$(function() {
	$('.irrsource').click(function () {
		$(this).siblings('.irrdata').toggle();
	});	

	if ( !document.location.hash )
	{
		pageload();	
	}
	
	$.history.init(pageload);

    $('.tabmenu li').click(function() {
        $('.tabmenuselected').removeClass('tabmenuselected'); 
        $(this).addClass('tabmenuselected');
        
        $('.tabdata').addClass('hidden');
        $('#' + $(this).attr('id').substring(4)).removeClass('hidden');
        $.history.load("_" + $(this).attr('id').substring(4));
    });
    $('table.toppeertable tbody tr:even td').addClass('toppeertableeven');
    $('table.toppeertable tbody tr:odd td').addClass('toppeertableodd');
});

function pageload(hash) {
	if ( hash ) {
		$('.tabmenuselected').removeClass('tabmenuselected'); 
	    $('#tab' + hash).addClass('tabmenuselected');
	    
	    $('.tabdata').addClass('hidden');
	    $('#' + hash.substring(1)).removeClass('hidden');
	} else {
		$('.tabmenuselected').removeClass('tabmenuselected'); 
		$('.tabmenu li:first').addClass('tabmenuselected');
		$('div.tabdata').addClass('hidden');
		$('div.tabdata:first').removeClass('hidden');
	}
}
