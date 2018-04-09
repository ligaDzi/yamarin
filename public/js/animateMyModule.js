// определяем пространство имен
MyApp.define("myAnima");

// Определение модуля
// инициализируем объект используя немелденно вызываемую функцию.
MyApp.myAnima = (function () {

    /* ЗАКРЫТЫЕ ЧЛЕНЫ */

    // анимация появления информации о технических характеристиках катера
    function _showTechHarac() {
        $('.itemInfo').hover(startAnim);
    }
    function startAnim() {
        if($(this).find('div').is('.lastSlide_cont.anima')){
            $('.lastSlide_cont')
                .animate({ bottom: "50%", height: "20%"}, { duration: 600, ease: "swing"})
                .animate({ bottom: "5%", height: "50%" }, { duration: 400})
                .animate({ bottom: "30%", height: "30%" }, { duration: 400})
                .animate({ bottom: "15%", height: "40%" }, { duration: 400})
                .removeClass("anima");                       // здесь удаляеться класс ".anima", чтобы анимация выполнилась только один раз
        }
    }
    
    // анимация для окан "Информации по уходу", "Гарантии", "Заказа"
    // показать окно
    function _showInfoPage(){
        $('#infoPage').animate({ left: "15%"}, { duration: 600, ease: "swing"});
    }
    // закрыть окно
    function _closeInfoPage(){
        $('#infoPage').animate({ left: "-150%"}, { duration: 600, ease: "swing"});
    }

    return {
        /* ОТКРЫТИЕ ДОСТУПА К ОПРЕДЕЛЕННЫМ МЕТОДАМ. */
        showTechHarac: _showTechHarac,
        showInfoPage:_showInfoPage,
        closeInfoPage: _closeInfoPage
    }
}());





