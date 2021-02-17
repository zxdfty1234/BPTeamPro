'use strict'
var mql = window.matchMedia("screen and (max-width: 768px)");

// nav_Toggle 클릭시 navbar 내려오게
const navbar = document.querySelector('#navbar');
const toggle = document.querySelector('.nav_toggle');
const sns = document.querySelector('.aside_sns');
toggle.addEventListener('click', ()=>{
    if(mql.matches){
        navbar.style.top = 0;
    }else{
        navbar.style.top = 0;
        sns.style.top = 200 + 'px';
    }
});
// close 버튼 클릭시 navbar 올라가기
const close = document.querySelector('.nav_close');
close.addEventListener('click', ()=>{
    if(mql.matches){
        navbar.style.top = -480 + 'px';
    }else{
        navbar.style.top = -200 + 'px';
        sns.style.top = 80 + 'px';
    }
});
// scroll 하면 home 섹션 등장
const home = document.querySelector('#home');
const secTop = document.querySelector('#top');
const conTop = document.querySelector('.home_content_top');
const topHeight = secTop.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(mql.matches){
            home.style.opacity = 1;
            home.style.backgroundSize = 100 + '%';
            conTop.style.opacity = 1;
            conTop.style.top = 70 + 'px';
    }else{
        if(window.scrollY > topHeight/4){
            home.style.opacity = 1;
            home.style.backgroundSize = 100 + '%';
            conTop.style.opacity = 1;
            conTop.style.top = 120 + 'px';
        }
    }
});
// scroll 하면 sybar, content left / right 등장
document.addEventListener('scroll', ()=>{
    const sybar = document.querySelector('.sybar');
    const left = document.querySelector('.home_content_left');
    const right = document.querySelector('.home_content_right');
    if(mql.matches){
        if(window.scrollY > 50){
            sybar.style.height = 200 + 'px';
            left.style.opacity = 1;
            left.style.left = 0;
            right.style.opacity = 1;
            right.style.right = 0;
        }
    }else{
        if(window.scrollY > 550){
            sybar.style.height = 200 + 'px';
            left.style.opacity = 1;
            left.style.left = 0;
            right.style.opacity = 1;
            right.style.right = 0;
        }
    }
});
// scroll 하면 Arrow up 등장
const arrow = document.querySelector('.aside_arrow');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > topHeight/2){
        arrow.classList.add('visible');
    }else{
        arrow.classList.remove('visible');
    }
});
// arrow 누르면 최상단으로 이동
arrow.addEventListener('click', ()=>{
    window.scrollTo({top: 0, left: 0, behavior:'smooth'});
});
// 이미지를 순서대로 보여주는 함수(각 캠페인별로)
let cnt = 0;
var randomTimeout;
const backImg = document.querySelector('.backImg');
const bgArray = new Array();
function brRandombg(){
    bgArray[0] = `url('images/1.jpg')`;
    bgArray[1] = `url('images/2.jpg')`;
    bgArray[2] = `url('images/3.jpg')`;
    if(cnt < bgArray.length){
        backImg.style.backgroundImage=bgArray[cnt];
        randomTimeout = setTimeout(brRandombg,2000);
        cnt++;
    }else if(cnt >= bgArray.length){
        randomTimeout = setTimeout(brRandombg,0);
        cnt = 0;    
    }
};
function imcRandombg(){
    bgArray[0] = `url('images/4.jpg')`;
    bgArray[1] = `url('images/5.jpg')`;
    bgArray[2] = `url('images/6.jpg')`;
    if(cnt < bgArray.length){
        backImg.style.backgroundImage=bgArray[cnt];
        randomTimeout = setTimeout(imcRandombg,2000);
        cnt++;
    }else if(cnt >= bgArray.length){
        randomTimeout = setTimeout(imcRandombg,0);
        cnt = 0;    
    }
};
function tvRandombg(){
    bgArray[0] = `url('images/7.jpg')`;
    bgArray[1] = `url('images/8.jpg')`;
    bgArray[2] = `url('images/9.jpg')`;
    if(cnt < bgArray.length){
        backImg.style.backgroundImage=bgArray[cnt];
        randomTimeout = setTimeout(tvRandombg,2000);
        cnt++;
    }else if(cnt >= bgArray.length){
        randomTimeout = setTimeout(tvRandombg,0);
        cnt = 0;    
    }
};
function snsRandombg(){
    bgArray[0] = `url('images/10.jpg')`;
    bgArray[1] = `url('images/11.jpg')`;
    bgArray[2] = `url('images/12.jpg')`;
    if(cnt < bgArray.length){
        backImg.style.backgroundImage=bgArray[cnt];
        randomTimeout = setTimeout(snsRandombg,2000);
        cnt++;
    }else if(cnt >= bgArray.length){
        randomTimeout = setTimeout(snsRandombg,0);
        cnt = 0;    
    }
};
// capaign 마우스 올리면 배경에 이미지 나타냄
const one = document.querySelector('.one').firstElementChild;
const two = document.querySelector('.two').firstElementChild;
const three = document.querySelector('.three').firstElementChild;
const four = document.querySelector('.four').firstElementChild;
const five = document.querySelector('.five').firstElementChild;
const six = document.querySelector('.six').firstElementChild;
document.addEventListener('mouseover', (event)=>{
    const target = event.target;
    switch(target){
        case two: brRandombg(); break;
        case three: imcRandombg(); break;
        case four: tvRandombg(); break;
        case five: snsRandombg(); break;
        default: 
        clearTimeout(randomTimeout);
        backImg.style.backgroundImage = 'none';
    }
});