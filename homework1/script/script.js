$(function(){
    $('.circle').click(function(){
        let r,g,b;
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        let width, heigth;
        width = Math.round(Math.random() * 300)
        height = Math.round(Math.random() * 300)
        $('.circle').animate({
            'width': `${width}px`,
            'height': `${height}px`,
            'background-color': `rgb(${r}, ${g}, ${b})`,
            'top': `${Math.round(Math.random() * window.innerHeight - 100)}`,
            'left': `${Math.round(Math.random() * window.innerWidth - 100)}`
        }, 2000, 'easeInOutBack')
    })


})