$(function(){
    $('.box').each(function(index, elem){
        let flags = true;
        let left;
        $(elem).click(function(){
            if(flags){
                flags = false;
                $(elem).css('pointer-events', 'none');
                left = $(elem).css('left');
                $(elem).css('z-index', '3');
                $('.big-gray').show();
                $('.big-gray').animate({
                    'background-color': `rgba(0, 0, 0, 0.692)`,
                }, 1500);
                $(elem).animate({
                    'top': `50px`,
                    'left': `250px`,
                    'width': `300px`,
                    'height': `300px`,
                }, 1500, function(){$(elem).css('pointer-events', 'auto')});
            }
            else if(!flags){
                flags = true;
                $(elem).css('pointer-events', 'none');
                $('.big-gray').animate({
                    'background-color': `rgba(0, 0, 0, 0)`,
                }, 1500, function(){$('.big-gray').hide()});
                $(elem).animate({
                    'top': `5px`,
                    'left': `${left}`,
                    'width': `150px`,
                    'height': `150px`,
                }, 1500, function(){
                    $(elem).css('z-index', '1');
                    $(elem).css('pointer-events', 'auto');
                });

            
            }
            
        });
    });



})