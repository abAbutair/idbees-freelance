/*@abdulrahmanAbutair_mainJS*/
////////////////////////////////////////
/*****************************************************
* (show / hide fields) on grid system (rows/cols)
* */
let switchLang = document.getElementById('switchLang');
(function () {
    let nodeListForEach = function(list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    let fieldsBtn = $('.grid-to-hide__btn .btn');

    nodeListForEach(fieldsBtn, function (curBtn) {

        curBtn.addEventListener('click', function () {

            let fieldsHideWrapper = $(this).closest('.grid-to-hide'),
                fieldsHideEven = $(this).closest('.grid-to-hide--even').children('.row').children('[class^="col-"]:not(:nth-child(-n+8))'),
                fieldsHideOdd = $(this).closest('.grid-to-hide--odd').children('.row').children('[class^="col-"]:not(:nth-child(-n+9))'),
                fieldsBtnSpan = $(this).find('span'),
                fieldsHideHeight = $(this).closest('.grid-to-hide').children('.row').children('[class^="col-"]').outerHeight();


            nodeListForEach(fieldsHideWrapper, function (cur) {
                cur.classList.toggle('grid-to-hide__visible');
            });

            if (fieldsHideWrapper.hasClass('grid-to-hide__visible')) {
                nodeListForEach(fieldsHideEven, function (cur) {
                    cur.style.height = fieldsHideHeight + 'px';
                });
                nodeListForEach(fieldsHideOdd, function (cur) {
                    cur.style.height = fieldsHideHeight + 'px';
                });
                if (switchLang.getAttribute('href') === 'css/style_ltr.css') {
                    nodeListForEach(fieldsBtnSpan, function (cur) {
                        cur.textContent = 'less';
                    });
                } else if (switchLang.getAttribute('href') === 'css/style_rtl.css'){
                    nodeListForEach(fieldsBtnSpan, function (cur) {
                        cur.textContent = 'أقل';
                    });
                }

            } else {
                nodeListForEach(fieldsHideEven, function (cur) {
                    cur.style.height = 0;
                });
                nodeListForEach(fieldsHideOdd, function (cur) {
                    cur.style.height = 0;
                });
                if (switchLang.getAttribute('href') === 'css/style_ltr.css') {
                    nodeListForEach(fieldsBtnSpan, function (cur) {
                        cur.textContent = 'more';
                    });
                } else if (switchLang.getAttribute('href') === 'css/style_rtl.css'){
                    nodeListForEach(fieldsBtnSpan, function (cur) {
                        cur.textContent = 'أكثر';
                    });
                }
            }
        });

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
/****************************************/

/*****************************************************
 * navbar open under width 992px
 * */
{
    const domVars = {
        navbar: document.querySelector('.header-bottom'),
        openBtn: document.querySelector('#openNav'),
        closeBtn: document.querySelector('#closeNav')
    }
    domVars.openBtn.addEventListener('click', () => {
        domVars.navbar.classList.toggle('show');
    });
    domVars.closeBtn.addEventListener('click', () => {
       domVars.navbar.classList.remove('show');
    });

    // click on body except the drop will close the drop
    document.addEventListener("click", e => {

        // If user clicks inside the element, do nothing
        if (e.target.closest("header")) return;

        // If user clicks outside the element, hide it!
        domVars.navbar.classList.remove('show');

    });
}

