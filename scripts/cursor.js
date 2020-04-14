//------------------------------------//
//Cursor//
//------------------------------------//
$(document)
    .mousemove(function (e) {
        $('.cursor')
            .eq(0)
            .css({
                left: e.pageX - 18,
                top: e.pageY - 18
            });
    });

$(document).on("mousemove", function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;
});

var cursor = $(".cursor");

$("a, .menu-toggle").on("mouseenter", function () {
    cursor.addClass("active");
});
$("a, .menu-toggle").on("mouseleave", function () {
    cursor.removeClass("active");
});