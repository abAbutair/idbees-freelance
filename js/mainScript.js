/*@abdulrahmanAbutair_mainJS*/
////////////////////////////////////////

/*****************************************************
* All field section => home page (show and hide fields)
* */
let fieldsHide = $('.fields>.row>[class^="col-"]:not(:nth-child(-n+8))'),
    fieldsBtn = $('.fields__btn'),
    fieldsBtnSpan = $('.fields__btn span');

fieldsBtn.on('click', function () {
    fieldsHide.toggleClass('fields__visible');
    if (fieldsHide.hasClass('fields__visible')) {
        fieldsBtnSpan.text('less')
    } else {
        fieldsBtnSpan.text('more')
    }
});
/****************************************/




