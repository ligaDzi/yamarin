// определяем пространство имен
MyApp.define("carousel");

// Определение модуля
// инициализируем объект используя немелденно вызываемую функцию.
MyApp.carousel = (function () {

    // закрытые члены
    function _initSlider() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 30000,
            autoplaySpeed: 1000,
        });
    }

    return {
        // открытые доступа к определенным методам.
        initSlider: _initSlider
    }
}());