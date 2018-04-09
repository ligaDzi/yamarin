// Если браузер не поддерживает атрибут placeholder
if (!Modernizr.input.placeholder) {

    $("input[placeholder]").focus(function () {
        if ($(this).val() == $(this).attr('placeholder')) {
            $(this).val("");
        }
    });

    $("input[placeholder]").blur(function () {
        if ($(this).val() == "") {
            $(this).val($(this).attr('placeholder'));
        }
    });

}