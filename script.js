const outer = document.querySelector('.outer'),
    card = document.querySelector('.card'),
    img = document.querySelector('img'),
    title = document.querySelector('h4'),
    details = document.querySelectorAll('.details'),
    info = document.querySelector('.info'),
    btn = document.querySelector('button'),
    elements = [img, title, ...details, info, btn],
    black = document.querySelector('.black'),
    silver = document.querySelector('.silver'),
    slider = document.querySelector('.slider'),
    handle = document.querySelector('.switch'),
    headphonesBig = document.querySelector('.headphones-big'),
    containerImgBig = document.querySelector('.container-img-big')


outer.addEventListener('mousemove', (e) => onMouseMove(e));

function onMouseMove(e){
    const xAxis = ((window.innerWidth / 2) - e.pageX) / -25;
    const yAxis = ((window.innerHeight / 2) - e.pageY) / 25;

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
}

outer.addEventListener('mouseenter', () => {
    elements.forEach(el => {
        el.style.transition = 'all .3s ease'
        el.style.transform = 'translateZ(100px)'
    })
})

outer.addEventListener('mouseleave', () => {
    card.classList.add('smooth');
    card.style.transform = 'rotateX(0) rotateY(0)';

    elements.forEach(el => {
        el.style.transform = 'translateZ(0px)'
    })

    setTimeout(() => {
        card.classList.remove('smooth')
    }, 300);
})

black.addEventListener('click', () => {
    img.classList.add('turn-black');
    black.classList.add('border');
    silver.classList.remove('border');
})

silver.addEventListener('click', () => {
    img.classList.remove('turn-black');
    silver.classList.add('border');
    black.classList.remove('border');
})

slider.addEventListener('click', () => {
    handle.classList.toggle('on');
    document.body.classList.toggle('turn-black') 
})

img.addEventListener('click', () => {
    headphonesBig.classList.add('show');
    containerImgBig.classList.add('show');

    if(headphonesBig.classList.contains('show')){
        containerImgBig.addEventListener('click', () => {
            headphonesBig.classList.remove('show');
            containerImgBig.classList.remove('show');
        })
    }
})


