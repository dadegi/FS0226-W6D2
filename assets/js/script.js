const showAlert = document.querySelector('#showAlert');

showAlert.addEventListener('click', function () {
	let confirm = window.confirm('Sei sicuro?');
	if (!confirm) {
		return;
	} else {
		console.log('hai confermato!');
	}
});

const popoverTriggerList = document.querySelectorAll(
	'[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
	(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);
