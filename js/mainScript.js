/*@abdulrahmanAbutair_mainJS*/
////////////////////////////////////////

/*****************************************************
* (show / hide fields) on grid system (rows/cols)
* */
(function () {
    let fieldsBtn = $('.grid-to-hide__btn');
    fieldsBtn.click( function () {
        let fieldsHide = $(this).closest('.grid-to-hide').children('.row').children('[class^="col-"]:not(:nth-child(-n+8))'),
            fieldsHideHeight = $(this).closest('.grid-to-hide').children('.row').children('[class^="col-"]').outerHeight(),
            fieldsBtnSpan = $(this).children('span');

        fieldsHide.toggleClass('grid-to-hide__visible');

        if (fieldsHide.hasClass('grid-to-hide__visible')) {
            fieldsBtnSpan.text('less');
            fieldsHide.css({'height': fieldsHideHeight + 'px'});
        } else {
            fieldsBtnSpan.text('more');
            fieldsHide.css({'height': '0'});
        }
    });
})();
/****************************************/




