function applyStyles(stats)
{
	jQuery(document).ready(function($) {
		$('div').highlight('mother');
	});

	if(stats.mother_haunted)
	{
		$('.highlight').css('color', 'grey');
	}
	if(stats.mother_gone)
	{
		$('.highlight').css('text-decoration', 'line-through');
	}
	if(stats.fog_off)
	{
		$('body').animate({backgroundColor: '#ffffff', color: '#000000'}, 5000);		
	}
	else if(stats.fog)
	{
		$('body').animate({backgroundColor: '#333333', color: '#ffffff'}, 2000);		
	}
}
