window.addEventListener('load', function(){
  var location = document.getElementById('imgslider')
  location.classList.add('animate__backInRight')
})
var evenitems = document.querySelectorAll('.tour_list .tour_items:nth-child(even)')
var odditems = document.querySelectorAll('.tour_list .tour_items:nth-child(odd)')
document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
var header_fix = document.getElementById('nav')
if (scroll_position > 91)  {
      header_fix.classList.add('fixed');
    } 
    if (scroll_position<=91){
      header_fix.classList.remove('fixed');
    }
    if (scroll_position>200){
      for( let i = 0; i < evenitems.length ; i++){
        evenitems[i].style.display = "flex";
        evenitems[i].classList.add('left_to_right')
      }
      for( let i = 0; i < odditems.length ; i++){
        odditems[i].style.display = "flex";
        odditems[i].classList.add('right_to_left')
      }
    }
});

$('.famous_tours-list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	
         
  $(".menu").click(function () {
    $menu = $(this);
    $subnavItems = $menu.next();
    $subnavItems.slideToggle(500, function () {
        $menu.text(function () {
            return $subnavItems.is(":visible") ? "Xem thêm" : "Rút gọn";
        })
    });

});

//mobile menu
var nav = document.getElementById("navjs");
    var navMenu = document.getElementById("menujs");
    navMenu.onclick = function() {
        var isClosed = nav.style.overflow == "hidden"
        if (isClosed) {
            nav.style.overflow = "visible";
        }
        else {
            nav.style.overflow = "hidden";
        }
    }
