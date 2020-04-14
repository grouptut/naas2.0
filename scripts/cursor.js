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
    let mouseX = e.pageX;
    let mouseY = e.pageY;
});

let cursor = $(".cursor");

$("a, .menu-toggle").on("mouseenter", function () {
    cursor.addClass("active");
});
$("a, .menu-toggle").on("mouseleave", function () {
    cursor.removeClass("active");
});