// Сценарий для создания пространства имен
var MyApp = MyApp || {};

MyApp.define = function (namespace) {
    var parts = namespace.split("."),
        parent = MyApp,
        i;

    // убрать начальный префикс если это имя глобальной переменной
    if (parts[0] == "MyApp") {
        parts = parts.slice(1);
    }

    // если в глобальном объекте нет свойства - создать его.
    for (i = 0; i < parts.length; i++) {

        if (typeof parent[parts[i]] == "undefined") {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
}