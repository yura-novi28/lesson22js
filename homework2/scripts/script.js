$(function(){
    let circle = $('.circle');
    let width, height;
    let r,g,b;
    setInterval(() => {
        width = Math.round(Math.random() * 300);
        height = Math.round(Math.random() * 300);
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        circle.animate({
            'width': `${width}px`,
            'height': `${height}px`,
            'background-color': `rgb(${r}, ${g}, ${b})`,
            'top': `${Math.round(Math.random() * window.innerHeight)}`,
            'left': `${Math.round(Math.random() * window.innerWidth)}`,
        }, 1000, 'easeOutCubic', function(){
            circle.css('box-shadow', `10px 10px 80px 5px rgb(${r},${g},${b})`)
            circle.css('border', `3px solid rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`)
        })
    }, 1000);

})