
$(document).ready(function () {
    
    //Запуск карусели
    MyApp.carousel.initSlider();

    let menu_act = false;
    // пункт меню модельных рядов катеров
    const subMenu = $('.this_plastic, .this_alumin').find('.menu_sub');

    // панель дополнительного меню
    const otherMenu = $('#other_menu');

    $(".hamburger").click( function () {
        $(this).toggleClass("is-active");

        // убрать стиль "выделенного меню"
        subMenu.removeClass('menu_sub_act');

        // убрать дополнительное меню
        otherMenu.slideUp(300);

        // убрать из DOM все меню "Пластиковые модели", "Алюминиевые модели" или "Инструкции"
        $('.menu_subsections').addClass('is_notActive');

        // добавить основное меню в DOM
        $('.this_main').removeClass('is_notActive');
    
        // активация/дезактивация основного меню
        menuActive(menu_act);

        // если основное меню не активированно то menu_act = false, следовательно надо его активировать.
        // И наоборот: если основное меню активированно то menu_act = true, следовательно надо его дезактивировать
        menu_act = !menu_act;
    });

    // нажатие на пункт меню "Пластиковые модели"
    $('.plastic_menu').click(function () {
        // сгенирировать метод click() для меню, тем самы его убрав.
        $(".hamburger").click();

        setTimeout(function () {
            plasticMenu();
        }, 900);
    });

    // нажатие на пункт меню "Алюминиевые модели"
    $('.alumin_menu').click(function () {
        // сгенирировать метод click() для меню, тем самы его убрав.
        $(".hamburger").click();

        setTimeout(function () {
            aluminMenu();
        }, 900);
    });

    // нажатие на пункт меню "Инструкции"
    $('.instruction_menu').click(function () {
        // сгенирировать метод click() для меню, тем самы его убрав.
        $(".hamburger").click();

        setTimeout(function () {
            instructionMenu();
        }, 900);
    });

    const infoPg = $('#infoPage');

    // нажатие на пункт меню "Инструкции по уходу"
    $('#care_instr').click(function(){

        // если окно информации уже открыто, закрыть его
        ifActToClose(infoPg);
        
        // сделать активным выбранный пункт меню и деактивировать другие пункты меню
        actSubBtn($(this));

        // показать страницу информации
        MyApp.myAnima.showInfoPage();

        // добавить на страницу html разметку с сервера
        MyApp.ajax.getInstruct();

        /*Для мобильного меню */        
        actSubMobMenu(".mob_instruction");
    });

    // нажатие на пункт меню "Гарантии"
    $('#guarantees').click(function(){

        // если окно информации уже открыто, закрыть его
        ifActToClose(infoPg);

        // сделать активным выбранный пункт меню
        actSubBtn($(this));

        // показать страницу информации
        MyApp.myAnima.showInfoPage();

        // добавить на страницу html разметку с сервера
        MyApp.ajax.getGuarant();

        /*Для мобильного меню */
        actSubMobMenu(".mob_guarant");  
    });
    
    // нажатие на пункт меню "Заказать"
    $('#order_desctop').click(function(){

        // если окно информации уже открыто, закрыть его
        ifActToClose(infoPg);
        MyApp.myAnima.showInfoPage();

        // сделать активным выбранный пункт меню
        $(".menu_sub").removeClass("menu_sub_act");
        $(this).addClass("menu_order_act");

        // добавить на страницу html разметку с сервера
        MyApp.ajax.getOrder();
    });
    
    // нажатие на кнопку закрыть окна: "Инструкции по уходу", "Гарантии", "Заказать"
    $('#btn_close').click(function(){
        MyApp.myAnima.closeInfoPage();

        // если была нажата кнопка "Заказать" на панели меню,
        // то удалить у этой кнопки выделяющий её класс 
        const orderPg = $('#order_desctop');

        if(orderPg.is(".menu_order_act")){
            orderPg.removeClass("menu_order_act");
        }
        // удалить у пунктов меню выделяющий их класс 
        $(".menu_sub").removeClass("menu_sub_act");
    });

    // обработка нажатия на пункт меню модельного ряда катеров
    subMenu.click(function(){

        // убрать стиль "выделенного меню"  со всех пунктов меню
        subMenu.removeClass('menu_sub_act');

        // добавить стиль "выделенного меню" 
        $(this).toggleClass('menu_sub_act');
       
        // сделать видимым панель дополнительного меню
        otherMenu.slideUp(300).slideDown(300);

        // если выбронн пункт меню из модельного ряда Пластиковых моделей
        if($(this).parent(".menu_subsections").is(".this_plastic")){

            // скрыть все меню катеров на панели дополнительного меню
            restartMenuCater();

            // функция отображающая катера выбронного модельного ряда на панели дополнительного меню
            showSubOMPlastic($(this));
        }

        // если выбронн пункт меню из модельного ряда Алюминиевых моделей
        if($(this).parent(".menu_subsections").is(".this_alumin")){

            // скрыть все меню катеров на панели дополнительного меню
            restartMenuCater();

            // функция отображающая катера выбронного модельного ряда на панели дополнительного меню
            showSubOMAlumin($(this));
        }

    });

    // при клике по катеру на дополнительной панели, подключить стиль делающий выделенным выбранный пункт меню
    const otherMenuSub = $(".other_menu_sub");
    otherMenuSub.click(function (e) {
        otherMenuSub.removeClass("other_menu_sub_act");
        $(this).addClass("other_menu_sub_act");

        $('.preloader').fadeIn();
        MyApp.ajax.getBoatByID(e);
    });

});

/* Убрать прелоадер после полной загрузки страницы (включая загрузку картинок) */
$(window).on('load', function () {
    
    $('.preloader').delay(500).fadeOut('slow');
});

// функция отображающая катера выбронного модельного ряда на панели дополнительного меню (Пластиковые)
function showSubOMPlastic(menuAct) {
    if(menuAct.is(".dayCruiser")){        
        const dayCruiser = $(".other_menu_cont.dayCruiser");        
        dayCruiser.fadeTo(200, 1);
        dayCruiser.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".plasticConsole")){
        const plasticCons = $(".other_menu_cont.plasticConsole");
        plasticCons.fadeTo(200, 1);
        plasticCons.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".plasticCabin")){
        const plasticCabin = $(".other_menu_cont.plasticCabin");
        plasticCabin.fadeTo(200, 1);
        plasticCabin.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".plasticBowRider")){
        const plasBowRider = $(".other_menu_cont.plasticBowRider");
        plasBowRider.fadeTo(200, 1);
        plasBowRider.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".hardTop")){
        const hardTop = $(".other_menu_cont.hardTop");
        hardTop.fadeTo(200, 1);
        hardTop.find(".other_menu_txt").fadeIn(200);
    }    
}

// функция отображающая катера выбронного модельного ряда на панели дополнительного меню (Алюминиевые)
function showSubOMAlumin(menuAct) {
    if(menuAct.is(".aluminCabin")){
        const aluminCabin = $(".other_menu_cont.aluminCabin");
        aluminCabin.fadeTo(200, 1);
        aluminCabin.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".centerConsole")){
        const centerConsole = $(".other_menu_cont.centerConsole");
        centerConsole.fadeTo(200, 1);
        centerConsole.find(".other_menu_txt").fadeIn(200);
    }
    else if(menuAct.is(".aluminBowRider")){
        const aluminBowRider = $(".other_menu_cont.aluminBowRider");
        aluminBowRider.fadeTo(200, 1);
        aluminBowRider.find(".other_menu_txt").fadeIn(200);
    }
}

// функция скрывающая все меню катеров, перед отображением нового выбронного меню катеров
function restartMenuCater() {
    // скрыть все меню катеров
    $(".other_menu_cont .other_menu_txt").fadeOut(200);

    // скрыть все ".other_menu_cont", где располагаются меню катеров.
    // Это необходимо т.к. если этого не делать, и только скрыть меню катеров, то  
    // блоки ".other_menu_cont" будут отображаться в виде точек в верхнем левом углу.
    $(".other_menu_cont").fadeTo(200, 0);
}

// добавления меню "Пластиковых моделей" 
function plasticMenu() {
    const plastic =  $('.this_plastic');

    // добавить меню "Пластиковые модели" в DOM    
    plastic.removeClass('is_notActive');

    // убрать основное меню из DOM
    $('.this_main').addClass('is_notActive');

    // сделать меню "Пластиковые модели" видемым
    menuSubPush(plastic);
}

// добавления меню "Алюминиевых моделей"
function aluminMenu() {
    const alumin =  $('.this_alumin');

    // добавить меню "Алюминиевые модели" в DOM    
    alumin.removeClass('is_notActive');

    // убрать основное меню из DOM
    $('.this_main').addClass('is_notActive');

    // сделать меню "Алюминиевые модели" видемым
    menuSubPush(alumin);
}

// добавления меню "Инструкции"
function instructionMenu() {
    const instruction =  $('.this_instruction');

    // добавить меню "Инструкции" в DOM    
    instruction.removeClass('is_notActive');

    // убрать основное меню из DOM
    $('.this_main').addClass('is_notActive');

    // сделать меню "Инструкции" видемым
    menuSubPush(instruction);
}

function menuActive(menu_act) {  
        
    // если меню отозванно
    if(menu_act){
        menuSubDel();
        $('.menu_sub hr').eq(0)
            .animate({height: '90%'}, {duration: 400})
            .animate({height: '30%'}, {duration: 400})
            .animate({height: '60%'}, {duration: 400});
        $('.menu_sub_btn').animate({opacity: 0}, {duration: 500} );
    }
    // если меню вызванно 
    else{     
        $('.menu_sub hr').eq(0)
            .animate({height: '30%'}, {duration: 400, complete: menuSubPush($('.this_main'))})
            .animate({height: '90%'}, {duration: 400})
            .animate({height: '60%'}, {duration: 400});

    }
} 

// появление меню
function menuSubPush(menu) {                
    menu.find('.menu_sub hr').css({opacity: 1, width: '3px'});

    menu.find('.menu_sub_btn').show(200, function(){

        menu.find('.menu_sub').addClass("menu_sub_hover");

        menu.find('.menu_sub hr').animate({height: '60%'}, {duration: 200});
        menu.find('.menu_sub_btn').animate({opacity: 1}, {duration: 200} ); 

    });        
}

// исчезновение основного меню
function menuSubDel(){

    $('.menu_sub_btn').animate({opacity: 0}, {duration: 100, queue: false} ); 

    const hr = $('.menu_sub').filter(":not(:nth-child(1))").find('hr');

    hr.animate({height: '0%'}, 100, function(){

        $('.menu_sub').removeClass("menu_sub_hover");
        $('.menu_sub_btn').hide(100, hrNotDisplay); 
    });
    function hrNotDisplay(){
        hr.css({opacity: 0, width: '0px'});
    }
}

// если окно информации уже открыто, закрыть его
function ifActToClose(infoPg) {
    let fif = fifteen();
    let leftNum = leftStrToNum(infoPg);

    // если значение "left" элемента "#infoPage" равно 15% от ширины окна,
    // то значит надо закрыть элемент "#infoPage" 
    if(leftNum == fif){
        $('#btn_close').click();
    }
}

// определить сколько в пикселях будет 15% от ширины окна
function fifteen(){
    let ww = $(window).width();
    let fpr = (ww * 15)/100;
    return fpr;
}

// получить значени "left" элемента "#infoPage"
function leftStrToNum(infoPg){

    // извлечь значение "left" в строковом виде без "px"
    let leftStr = infoPg.css("left").split("px");

    // перевести строку в число и округлить до десятых с помощью метода .toFixed(1)
    let leftNum = Number(leftStr[0]).toFixed(1);

    return leftNum;
}

// сделать активным выбранный пункт меню
function actSubBtn(btn) {    
    btn.parent(".menu_sub").addClass("menu_sub_act");
}

// выбор пункта меню на странице "Инструкции по уходу" 
function addHandSubInstr() {
    $('.instruct_nav_sub a').click(function(){  

        // выделить выбранный пункт меню
        $(".instruct_nav_sub").removeClass("instruct_sub_act");
        $(this).parent(".instruct_nav_sub").addClass("instruct_sub_act");

        // сделать запрос на сервер за страницей и добавить её
        MyApp.ajax.getSectionInstruct($(this).attr("data-href"));
    });
}


// сделать активным пункт меню "Гарантии" или "Инструкции по уходу" в мобильной версии сайта
function actSubMobMenu(name){
    // убрать выделяющие классы у пунктов меню, которые были выбранны до этого
    $(".icon_horiz").removeClass("is-active");
    $(".menu_mob_instruction_btn_head").removeClass("is-active");
    
    // сделать активным пункт меню "Инструкции по уходу" в мобильной версии сайта
    $(name).toggleClass("is-active");   
}