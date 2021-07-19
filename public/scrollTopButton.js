var scrollToTopButton = document.getElementById("scroll-top-button");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
		scrollToTopButton.style.display = "block";
	} else {
		scrollToTopButton.style.display = "none";
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
