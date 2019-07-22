function registerEvents() {
    var toggleMask = function() {
        if($('.mobileMenu').is(':visible')){
            $('body').addClass("showMask");
            $('.mask').show();
        } else {
            $('body').removeClass("showMask");
            $('.mask').hide();
        }
    };
    $(".mobileMenuIcon").off("click").on("click",function(){
        $(".mobileMenu").slideToggle(function(){toggleMask();});
    });
    $('.mask').off("click").on("click",function(){
        $(".mobileMenuIcon").trigger('click');
    });
}

$(document).ready(function(){
    registerEvents();
});