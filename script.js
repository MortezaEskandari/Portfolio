$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu_button').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    $('.navbar .menu a').on("click", function(){
        $('.navbar .menu').toggleClass("active");
    });
});