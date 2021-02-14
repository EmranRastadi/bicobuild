
$(function () {
    $('#profile_menu_btn').click(function () {
        var sub = $("#profile-dropdown-nav");
        sub.css({display: 'block', opacity: 1});
    });

    $("#float_menu_btn").click(function (){
        $("#back_chat_shadow").fadeIn();
    })
    $("#back_chat_shadow").click(function (){
        $(this).fadeOut();
    })


})


//   verify code

$(function() {
    'use strict';

    var body = $('#wrapper');

    function goToNextInput(e) {
        var key = e.which,
            t = $(e.target),
            sib = t.next('input');

        if (key != 9 && (key < 48 || key > 57)) {
            e.preventDefault();
            return false;
        }

        if (key === 9) {
            return true;
        }

        if (!sib || !sib.length) {
            sib = body.find('input').eq(0);
        }
        sib.select().focus();
    }

    function onKeyDown(e) {
        var key = e.which;

        if (key === 9 || (key >= 48 && key <= 57)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    function onFocus(e) {
        $(e.target).select();
    }



    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);

    $("ul li#delete_package").click(function (){

        var keys = $(this).attr("key-attr");
        var back_det = $("#back_detail");
        back_det.fadeIn();
        var serial_pack = $(this).closest("div.box-package").attr("serial-pack");
        var appended = '<span class="task-cat red">'+serial_pack+'</span>';
        $("#serial_pp").html('');
        $("#serial_pp").append(appended);
    })

    $("ul li#load_more").click(function (){

        var keys = $(this).attr("key-attr");
        var load_more = $(this).closest("div.box-package").find(".load_more");
        var price_pol = $(this).closest("div.box-package").find("#price_pol");
        price_pol.addClass("active_pol");
        setTimeout(function (){
            load_more.addClass("active_load_more");
        },300)


    })



    $("#cancel").click(function (){
        $("#back_detail").fadeOut()
    })

})




// end verify
