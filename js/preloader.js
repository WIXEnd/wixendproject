document.body.onload = function () {

	setTimeout(function() {
		var preloader = document.getElementById('preloader-page');
		if ( !preloader.classList.contains('unvisible') ) 
		{
			preloader.classList.add('unvisible');
		}
	}, 600);

}