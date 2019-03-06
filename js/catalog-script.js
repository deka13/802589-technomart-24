var buyLinks = document.querySelectorAll('.buy-item');
var buyPopup = document.querySelector('.modal-basket');
var closePopup = buyPopup.querySelector('.modal-close');

for (var i=0; i < buyLinks.length; i++) {
   var buyLink = buyLinks[i];
   buyLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	buyPopup.classList.add("modal-show");
});
}


buyLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	buyPopup.classList.add("modal-show");
});

closePopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
		if (buyPopup.classList.contains("modal-show")) {
			buyPopup.classList.remove("modal-show");
		}
	}
});