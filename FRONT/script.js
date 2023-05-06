// slider

$(document).ready(() => {
  var slideIndex = 1;
  showSlide(slideIndex);

  $(".prev").click (() => {
    showSlide(slideIndex -= 1);
  });

  $(".next").click(() => {
    showSlide(slideIndex += 1);
  });

  function showSlide(n) {
    var slides = $(".slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.removeClass("active");
    slides.eq(slideIndex - 1).addClass("active");
  }
});


// Toggle the hamburger menu
/*const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('show-menu');
});

// Hide the hamburger menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove('show-menu');
	});
});

// Change the banner to the hamburger menu at 980px

const banner = document.querySelector('.banner');
const logo = document.querySelector('.logo');

function checkWindowSize() {
	if (window.innerWidth <= 980) {
		banner.style.display = 'none';
		logo.style.display = 'block';
	} else {
		banner.style.display = 'block';
		logo.style.display = 'none';
	}
}

window.addEventListener('resize', checkWindowSize);
checkWindowSize();
</script>


