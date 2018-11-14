// определяем пространство имен
MyApp.define("ajax");

// Определение модуля
// инициализируем объект используя немелденно вызываемую функцию.
MyApp.ajax = (function () {

    /* ЗАКРЫТЫЕ ЧЛЕНЫ */
    // запросить на сервере лодку по ID
    function _getBoatByID(e){
    
        const id = e.currentTarget.getAttribute('data-idBoat');            
    
        /* Сделать видимым прелоадер */
        $('.preloader').fadeIn();

        $.ajax({
            type: "GET",
            url: "/boat/" + id,
            success: (data)=>{
                // $(data) - так создается DOM дерево в виде массива из пришедших клиенту данных
                // $(data)[0] - так берется первый div с классом ".owl-carousel" из DOM дерева
                const dataDOM = $(data);
                const carousel = dataDOM[0];  
                const info = dataDOM[2];

                $('.owl-demo').html(carousel);
                $('#mobille_info').html(info);

                /* Скрыть прелоадер через 2 секунды */
                $('.bcImg').on('load', function(){

                    $('.preloader').delay(500).fadeOut('slow');
                });

                MyApp.carousel.initSlider();

                // анимация появления информации о технических характеристиках катера
                MyApp.myAnima.showTechHarac();
            },
            error: (err)=>{
                console.log("err");
            }
        });

    }

    // запросить у сервера страницу "Гарантии"
    function _getGuarant(){
              
        $.ajax({
            type: "GET",
            url: "/guarant",
            success: (data)=>{
                // задержка перед добавлением контента на страницу,
                // чтобы страница со старым контентом успела закрыться и только потом открыться с новым контентом
                setTimeout(function(){
                    $(".infoPage_cont").html(data);
                    $("#mobille_info").html(`<div class="bg_mob_info">${data}</div>`);

                    // Инициализируем элемент управления
                    $("#accordion").accordion({heightStyle: "fill"});
                }, 500);
            },
            error: (err)=>{
                console.log("err");
            }
        });

    }
    
    // запросить у сервера страницу "Инструкции по уходу"
    function _getInstruct(){
              
        $.ajax({
            type: "GET",
            url: "/instruct",
            success: (data)=>{
                // задержка перед добавлением контента на страницу,
                // чтобы страница со старым контентом успела закрыться и только потом открыться с новым контентом
                setTimeout(function(){
                    $(".infoPage_cont").html(data);
                    $("#mobille_info").html(`<div class="bg_mob_info">${data}</div>`);

                    // Инициализируем элемент управления
                    $("#accordion").accordion({heightStyle: "fill"});

                    // добавить обработчики к пунктом меню на странице "Инструкции по уходу"
                    addHandSubInstr();
                }, 500);
            },
            error: (err)=>{
                console.log("err");
            }
        });

    }
        
    // запросить у сервера раздел со страницы "Инструкции по уходу"
    function _getSectionInstruct(href){
              
        $.ajax({
            type: "GET",
            url: href,
            success: (data)=>{
                $(".instruct_info").html(data);
                
                // Инициализируем элемент управления
                $("#accordion").accordion({heightStyle: "fill"});

                // если с сервера пришел акардион удалить полосу прокрутки
                if($(".instruct_info").find(".instruct_info_bg").is(".instruct_info_bg")){
                    $(".instruct_info").addClass("instruct_info_over");
                }
                else{
                    $(".instruct_info").removeClass("instruct_info_over");
                }
            },
            error: (err)=>{
                console.log("err");
            }
        });

    }

    // запросить у сервера страницу "Заказать"
    function _getOrder(){
          
        $.ajax({
            type: "GET",
            url: "/order",
            success: (data)=>{
                // задержка перед добавлением контента на страницу,
                // чтобы страница со старым контентом успела закрыться и только потом открыться с новым контентом
                setTimeout(function(){

                    $(".infoPage_cont").html(data);
                    $("#mobille_info").html(`<div class="bg_mob_info">${data}</div>`);

                }, 500);
            },
            error: (err)=>{
                console.log("err");
            }
        });
    
    }

    return {
        // открытие доступа к определенным методам.
        getBoatByID: _getBoatByID,
        getGuarant: _getGuarant,
        getInstruct: _getInstruct,
        getSectionInstruct: _getSectionInstruct,
        getOrder: _getOrder
    }
}());

