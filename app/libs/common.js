$(document).ready(function () {


	//E-mail Ajax Send
	$("form").submit(function() { //Change
const name      = $("#name").val().trim();
const email     = $("#email").val().trim();
const subgect   = $("#subgect").val().trim();
const message   = $("#message").val().trim();
const asdActive = document.getElementById('asdActive');
if(asdActive.checked ) {
$("#asdActive").val("Да");
} else {
$("#asdActive").val("Нет");

}

if(name == '') {
	$("#errorText").text('Введите свое имя');
	return false;
} else if(email == '') {
	$("#errorText").text('Введите ваш почтовый ящик');
	return false;
} else if(subgect == '') {
	$("#errorText").text('Введите тему сообщения');
	return false;
}  else if(message == '' || message.leght < 10 ) {
	$("#errorText").text('Введите немного длиннее сообщение, чем это сделали сейчас');
	return false;
}
else if(!asdActive.checked ) {
	$("#errorText").text('Согласитесь с условиями обработки кондифенциальной информации');
	return false;
}
$("#errorText").text('');

		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
		$(".footer_block .success").addClass("active");
			setTimeout(function() {
				$(".footer_block .success").removeClass("active");
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

















});