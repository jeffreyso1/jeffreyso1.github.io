$(document).ready(function(){
    
    function addMouseoverToProject(projectNum) {
        $("#project-image"+projectNum).mouseover(function() {
            $("#overlay-container"+projectNum).css("left", "0");
        });
    
        $("#overlay-container"+projectNum).mouseleave(function() {
            $("#overlay-container"+projectNum).css("left", "-300px");
        });
    }
    // addMouseoverToProject(1);
    function addSelectedOnScroll(sectionId) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            $("#"+sectionId+"-button").toggleClass("selected",
             //add "ok" class when div position match or exceeds else remove the "ok" class.
                scroll >= $("#"+sectionId).offset().top && 
                scroll <= $("#"+sectionId).offset().top + $("#"+sectionId).height()
            );
        });
    }
    // addSelectedOnScroll("home");
    addSelectedOnScroll("about");
    addSelectedOnScroll("experience");
    addSelectedOnScroll("education");
    addSelectedOnScroll("portfolio");
    // addSelectedOnScroll("contact");

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        $("#"+"home"+"-button").toggleClass("selected",
         //add "ok" class when div position match or exceeds else remove the "ok" class.
            // scroll >= $("#"+sectionId).offset().top && 
            scroll <= $("#"+"home").offset().top + $("#"+"home").height()
        );
    });
});