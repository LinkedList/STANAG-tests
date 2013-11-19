$(document).ready(function () {
	//countdown setting
	$('#countdown').countdown({
		until: "+45m",
		onExpiry: function () {
			$(":submit").prop('disabled', 'true');
			check_answers();
		}});
	//submit event
	$(":submit").on('click', function (e) {
		e.preventDefault();
		$(":submit").prop('disabled', 'true');
		$('li').removeClass('alert-danger alert-success');
		check_answers();
	});

	//checking function
	function check_answers() {
		$(":checked").each(function () {
			_this = $(this);
			console.log(_this.attr('correct'));
			if(_this.attr('correct')!= undefined) {
				_this.closest('li').addClass('alert-success');
			} else {
				_this.closest('li').addClass('alert-danger');
			}
		})
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}
});