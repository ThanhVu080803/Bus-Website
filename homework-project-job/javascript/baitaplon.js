window.addEventListener ('load', function(){

    //Xem Thêm - Rút Gọn
    $(".btnloadmore").click(function () {

        $btnloadmore = $(this);
        //getting the next element
        $items = $btnloadmore.prev();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $items.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $btnloadmore.text(function () {
                //change text based on condition
                return $items.is(":visible") ? "Rút gọn" : "Xem thêm";
            });
        });
    
    });



    //Backtop
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop()) {
                $('#backtop').fadeIn();
            }
            else {
                $('#backtop').fadeOut();
            }
        });
        $('#backtop').click(function(){
            $('html,body').animate({
                scrollTop: 0
            },1000)
        })
    })


    //JS  Menu Mobile
    $(".menu").click(function () {

        $menu = $(this);
        //getting the next element
        $subnavItems = $menu.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $subnavItems.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $menu.text(function () {
                // return $subnavItems.is(":visible") ? "true" : "fasle";
            })
        });
    
    });


    $('.big-ticket').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        dots: true,
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        
    })     
})

