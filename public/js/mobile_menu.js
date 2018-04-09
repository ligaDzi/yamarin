

$(document).ready(function () {

    // кнопка вызова меню
    $(".hamburger_mob").click(function () {
        $(this).toggleClass("is-active");
        $('.menu_mob_sub').toggleClass("is-active");
        $('.menu_mob_sub_margin').toggle(300);
    });
    // кнопка вызова подменю "Пластиковых моделей"
    $(".menu_mob_plastic_btn_head").click(function(){
        $(this).toggleClass("is-active");
        
        $(this).next().slideToggle(300);

    }); 
    // кнопка вызова подменю "Алюминиевых моделей"
    $(".menu_mob_aluminum_btn_head").click(function(){
        $(this).toggleClass("is-active");
        
        $(this).next().slideToggle(300);

    });
    // кнопка вызова подменю "Инструкции"
    $(".menu_mob_instruction_btn_head").click(function(){
        $(".menu_mob_instruction_btn_head").removeClass("is-active");
        $(this).toggleClass("is-active");        

    });
    // запрос страницы "Гарантии" с сервера
    $(".mob_guarant").click(function(){

        // убрать выделяющие классы у пунктов меню, которые были выбранны до этого
        $(".icon_horiz").removeClass("is-active");   

        // добавить на страницу html разметку с сервера
        MyApp.ajax.getGuarant();

        $(".hamburger_mob").click();
    });
    // запрос страницы "Инструкции по уходу" с сервера
    $(".mob_instruction").click(function(){

        // убрать выделяющие классы у пунктов меню, которые были выбранны до этого
        $(".icon_horiz").removeClass("is-active");   

        // добавить на страницу html разметку с сервера
        MyApp.ajax.getInstruct();

        $(".hamburger_mob").click();
    });
    //
    $("#mobile_order").click(function(){
        MyApp.ajax.getOrder();
    });
    // выбор подменю
    $(".menu_mob_btn_list").click(function(e){

        // убрать выделяющие классы у пунктов меню, которые были выбранны до этого
        $(".icon_horiz").removeClass("is-active");        
        $(".menu_mob_instruction_btn_head").removeClass("is-active");
        
        $(this).find(".icon_horiz").addClass("is-active");

        MyApp.ajax.getBoatByID(e);

        $(".hamburger_mob").click();
    });
    


})
