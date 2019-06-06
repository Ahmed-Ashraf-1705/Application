// move to the login form
var marginVar = 405;
$(document).ready(function(){
    $('.registerBtn').click(function(){
        $('.loginBtn').removeClass('active');
        $('.registerBtn').addClass('active');
        if (marginVar == 405){
            $('.left').css('margin-left','-405px');
            $('.right').css('margin-left','0px');
            marginVar = marginVar - 405;
        }
    });
    $('.loginBtn').click(function(){
        $('.registerBtn').removeClass('active');
        $('.loginBtn').addClass('active');
        if (marginVar == 0){
            $('.left').css('margin-left','0px');
            $('.right').css('margin-left','405px');
            marginVar = marginVar + 405;
        }
    });
});
