var mailLink = document.querySelector('.email-button');
var mailPopup = document.querySelector('.modal-mail');
var closePopup = document.querySelector('.modal-close');
var nameInput = mailPopup.querySelector('[name=user-name]');
var mailInput = mailPopup.querySelector('[name=user-email]');
var textArea = mailPopup.querySelector('[name=user-text]');
var mailForm = mailPopup.querySelector('.mail');

 
mailLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mailPopup.classList.add('modal-show');
	nameInput.focus();
})

closePopup.addEventListener('click', function(evt) {
	evt.preventDefault();
	mailPopup.classList.remove('modal-show');
	mailPopup.classList.remove('modal-error');
})

mailForm.addEventListener('submit', function(evt) {
	if (!nameInput.value || !mailInput.value || !textArea.value) {
		evt.preventDefault();
		mailPopup.classList.remove('modal-error');
        mailPopup.offsetWidth = mailPopup.offsetWidth;
		mailPopup.classList.add('modal-error');
	} 
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mailPopup.classList.contains('modal-show')) {
        mailPopup.classList.remove('modal-show');
        mailPopup.classList.remove('modal-error');
      }
    }
  });

var mapLink = document.querySelector('.map-link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});


