const container = document.querySelector('.container');
const card = document.querySelector('.card');
const Nike = document.querySelector('.header img');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const size = document.querySelector('.size');
const purchase = document.querySelector('.purchase button');


//moving animated
container.addEventListener('mousemove' , (e)=>{
    let xAxis = (window.innerWidth / 2  - e.pageX) /10;
    let yAxis = (window.innerHeight / 2  - e.pageY) /10;
    card.style.transform = `rotateX(${-(yAxis)}deg) rotateY(${xAxis}deg)`;
})
// ading mouse enter
container.addEventListener('mouseenter' , e =>{
    card.style.transition = 'none';

    // pop in
    Nike.style.transform = 'translateZ(150px) rotate(-20deg)';
    title.style.transform = 'translateZ(120px)';
    description.style.transform = 'translateZ(100px)';
    size.style.transform = 'translateZ(80px)';
    purchase.style.transform = 'translateZ(80px)';
})
//adding mouse leave
container.addEventListener('mouseleave' , e=>{
    card.style.transition = 'all .4s linear';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    //pop out
    Nike.style.transform = 'translateZ(0) rotate(0)';
    title.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    size.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
})