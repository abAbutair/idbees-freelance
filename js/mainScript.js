/*@abdulrahmanAbutair_mainJS*/
////////////////////////////////////////
/*****************************************************
* (show / hide fields) on grid system (rows/cols)
* */
(function () {
    let fieldsBtn = $('.grid-to-hide__btn');
    fieldsBtn.click( function () {

        let fieldsHideWrapper = $(this).closest('.grid-to-hide'),
            fieldsHideEven = $(this).closest('.grid-to-hide--even').children('.row').children('[class^="col-"]:not(:nth-child(-n+8))'),
            fieldsHideOdd = $(this).closest('.grid-to-hide--odd').children('.row').children('[class^="col-"]:not(:nth-child(-n+9))'),
            fieldsHideHeight = $(this).closest('.grid-to-hide').children('.row').children('[class^="col-"]').outerHeight(),
            fieldsBtnSpan = $(this).children('span');

        fieldsHideWrapper.toggleClass('grid-to-hide__visible');

        if (fieldsHideWrapper.hasClass('grid-to-hide__visible')) {
            fieldsBtnSpan.text('less');
            fieldsHideEven.css({'height': fieldsHideHeight + 'px'});
            fieldsHideOdd.css({'height': fieldsHideHeight + 'px'});
        } else {
            fieldsBtnSpan.text('more');
            fieldsHideEven.css({'height': '0'});
            fieldsHideOdd.css({'height': '0'});
        }
    });
})();
/****************************************/

/*****************************************************
 * menu swipe open
 * */
$(function () {
    // let tab_window = window.matchMedia("(max-width: 992px)");
    // if (tab_window.matches) {
    //
    // }
    $(".carousel").swipe({
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical",
        threshold: 10,
        excludedElements: ".select2-selection, .select2-dropdown, .custom-container, .custom-dropdown, form, input, textarea, select, button, fieldset, label, datalist, output, legend, optgroup"
    });
});
/****************************************/

/*****************************************************
 * menu swipe open
 * */
(function () {
    let favouriteBtn = $('.favourite');
    favouriteBtn.click( function () {
        $(this).toggleClass('favourite--added');
    });
})();
/****************************************/

/*****************************************************
 * sticky nav script
 * */
(function () {
    let header = document.querySelector("header");
    let headerHeight = header.offsetHeight;


    let main = document.querySelector("main");
    main.style.paddingTop = 0 + 'px';


    window.addEventListener('scroll', function () {
        let windowPos = window.scrollY > 0;
        if (windowPos) {
            header.classList.add('fixed');
            main.style.paddingTop = headerHeight + 'px';

        } else {
            header.classList.remove('fixed');
            main.style.paddingTop = 0 + 'px';
        }
    });
})();
/****************************************/

/*****************************************************
 * Back to top button
 * */
(function () {
    let back_to_top_btn = $('.back-to-top .btn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            back_to_top_btn.addClass('show');
        } else {
            back_to_top_btn.removeClass('show');
        }
    });

    back_to_top_btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
})();