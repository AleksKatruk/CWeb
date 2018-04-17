//Custom slider block
$(document).ready(function () {

    //desktop slider
    $(".js-slide-control").on('click', function (e) {
        var slideIndex = $(".js-slide-control").index(this);
        moveSlides(slideIndex)
    });
    $(".js-carousel-arrows").find(".carousel--rotate-left").on("click", function (e) {
        rotateCarouselLeft();
    });
    $(".js-carousel-arrows").find(".carousel--rotate-right").on("click", function (e) {
        rotateCarouselRight();
    });

    //mob slider
    $(".js-carousel")
        .on('swiperight', function () {
            rotateCarouselLeft();
        })
        .on('swipeleft', function () {
            rotateCarouselRight();
        });
    $(".indicator-mob--point").on('tap', function () {
        var slideIndex = $(".indicator-mob--point").index(this);
        moveSlides(slideIndex)
    });
});

function rotateCarouselLeft() {
    var $allSlides = $(".js-carousel .f-slide");
    var oldIndex = $allSlides.index($(".js-carousel .f-slide.center-slide"));
    if (oldIndex - 1 >= 0) {
        moveSlides(oldIndex - 1)
    } else {
        moveSlides($allSlides.length - 1)
    }
}

function rotateCarouselRight() {
    var $allSlides = $(".js-carousel .f-slide");
    var oldIndex = $allSlides.index($(".js-carousel .f-slide.center-slide"));
    if (oldIndex + 1 < $allSlides.length) {
        moveSlides(oldIndex + 1)
    } else {
        moveSlides(0)
    }
}

function moveSlides(newSlideIndex) {
    var $slides = $(".js-carousel .f-slide");
    var $activeSlide = $slides.eq(newSlideIndex);
    // var $highlighter = $(".js-carousel-highlighter");

    $slides.removeClass('right-slide center-slide left-slide').addClass('hidden-slide');
    $activeSlide.removeClass("hidden-slide").addClass("center-slide");
    if ($activeSlide.prev().length !== 0) {
        $activeSlide.prev().removeClass("hidden-slide").addClass("left-slide");
    } else {
        $slides.last().removeClass("hidden-slide").addClass("left-slide");
    }

    if ($activeSlide.next().length !== 0) {
        $activeSlide.next().removeClass("hidden-slide").addClass("right-slide");
    } else {
        $slides.first().removeClass("hidden-slide").addClass("right-slide");
    }
}
    //highlight
  /*  $highlighter.attr('class',
        $highlighter.attr('class').replace(/h-position-\d/g, 'h-position-' + (newSlideIndex + 1))
    );
    $(".js-slide-control").removeClass('active').eq(newSlideIndex).addClass('active');

    //highlight mob
    $(".indicator-mob--point").removeClass('active').eq(newSlideIndex).addClass('active');
}*/
//Custom slider block end