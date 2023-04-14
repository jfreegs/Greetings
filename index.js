$(function() {
	var textOpts = ["Welcome back Jacqueline  "],
		timeOut,
		len = textOpts.length,
		$writer = $('#writer'), 
		currentValue = 0, charVal = 0,
		cursor = '<span class="cursor">|</span>',
		lengths = [];

		$.each(textOpts, function( index, value ) {
		     lengths.push( value.length );
	  	});
		
		function typeAnimationIt() {
			var humanize = Math.round(Math.random() * (200 - 30)) + 30;
			timeOut = setTimeout(function() {
				charVal++;
				var	txtLen = lengths[currentValue],
					type = textOpts[currentValue].substring(0, charVal);
				$writer.html(type + cursor);
				typeAnimationIt();
				if(charVal == txtLen) {
					clearTimeout(timeOut);
					if(currentValue < len - 1) {
						setTimeout(function() {
							typeAnimationDelete();
						}, 1000);
					}
				}
			}, humanize);
		}

		typeAnimationIt();
});
