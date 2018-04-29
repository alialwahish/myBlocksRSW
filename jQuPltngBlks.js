$(document).ready(function(){

    var wid=$(window).width();
    if(wid<=480){
                               
        $('title').text("< 480");
    }
    if(wid>480 && wid<=1024){
        $('title').text("> 480");
    }
    if(wid>1024){
        $('title').text("> 1024");
    }

        $(window).resize(function(){
            wid=$(window).width();
            if(wid<=480){
                               
                $('title').text("< 480");
            }
            if(wid>480 && wid<=1024){
                $('title').text("> 480");
            }
            if(wid>1024){
                $('title').text("> 1024");
            }
           
        });
    

})