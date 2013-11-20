$(document).ready(function () {
	//countdown setting
	$('#countdown').countdown({
		until: "+45m",
		format: "MS",
		onExpiry: function () {
			$("#CheckQuiz").prop('disabled', 'true');
			check_answers();
		}});
	//submit event
	$("#CheckQuiz").on('click', function (e) {
		e.preventDefault();
		$("#CheckQuiz").prop('disabled', 'true');
		check_answers();
	});

	//checking function
	function check_answers() {
		$("#Quiz input[type='radio']").each(function () {
			var _this = $(this);
			var attr = _this.attr('correct');

			if(_this.is(":checked")) {
				if(typeof attr !== 'undefined' && attr !== false) {
					_this.closest('li').addClass('alert-success');
				} else {
					_this.closest('li').addClass('alert-danger');
				}	
			}

			//show right answer
			if(typeof attr !== 'undefined' && attr !== false) {
				_this.closest('li').append(' <span class="glyphicon glyphicon-ok"></span>')	
			}
		})
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}
});