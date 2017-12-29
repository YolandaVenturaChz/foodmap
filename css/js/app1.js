// cuando carga el coumento pasa por 3 procesos Loading, interactive-parseo y complete(comunicarte con los recursos externos con los cdn, link del jQuery)
$(document).ready(function () {
    // console.log(window.location.href);window.location.href = ''
    // direccionando a otro ruta
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 3000);



});
$("div").data("test", { first: 16, last: "pizza!" });
$("span:first").text($("div").data("test").first);
$("span:last").text($("div").data("test").last);