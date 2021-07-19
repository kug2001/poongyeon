'use strict';

import KakaoAuth from "../service/kakao.auth.js";

const kakaoAuth = new KakaoAuth(); 

// navbar
const navbarBox = document.querySelector('.navbar-box');
const navbarBoxHeight = navbarBox.getBoundingClientRect().height;
const kakaoLoginBtn = document.querySelector('.kakao-login-btn');
const kakaoLogOutBtn = document.querySelector('.kakao-logout-btn');
const userInfoState = document.querySelector('.user-info-state');
const scrollTopBtn = document.querySelector('.top-position-btn');


window.addEventListener('load', () =>{
  if(!Kakao.Auth.getAccessToken()){
    userInfoState.style.visibility = 'hidden';
    return;
  }
  kakaoLoginBtn.style.visibility = 'hidden';
  getUserInfo();
})



kakaoLoginBtn.addEventListener('click', (e) => {
  kakaoAuth.loginWithKakao();

})
kakaoLogOutBtn.addEventListener('click', (e) => {
  kakaoAuth.kakaoLogout();
})




document.addEventListener('scroll', (e) => {
  if(window.scrollY > navbarBoxHeight){
    navbarBox.classList.add('navbar-change');
    scrollTopBtn.style.display = 'block';
  }
  else {
    navbarBox.classList.remove('navbar-change');
    scrollTopBtn.style.display = 'none';
  }
})


function getUserInfo() {
  Kakao.API.request({
    url: '/v2/user/me',
    data: {
      property_keys: [
        "kakao_account.email",
        "properties.",  
      ]
    },
    success: (response) => {
      const property = response.properties;
      userInfoState.style.visibility = 'visible';

      const profilImg = document.querySelector('.profil-img');
      profilImg.setAttribute('src', property.thumbnail_image);
      profilImg.setAttribute('alt', '프로필이미지');

      const username = document.querySelector('.nickname');
      username.innerHTML = property.nickname + '님 환영합니다.';
    },
    fail: (error) => {
      console.log(error);
    }
  });
}

scrollTopBtn.addEventListener('click', ()=>{
  window.scrollTo(0, 0);
})


// companyIntro

const menuList = document.querySelector('.menu-tap-list');
const informationBox = document.querySelectorAll('.information-box');

function boxChange_info (data) {
  const link = data;
  informationBox.forEach(box => {
    if(box.className === `information-box ${link}` || box.className === `information-box ${link} active`){
      box.classList.add('active');
    }
    else {
      box.classList.remove('active');
    }
  })
}

menuList.addEventListener('click', (e) =>{
  console.log(e.target.dataset.link);
  const link = e.target.dataset.link;
  if(link === 'ceo'){
    boxChange_info(link);
  }
  else if(link === 'idea'){
    boxChange_info(link);
  }
  else if(link === 'soul'){
    boxChange_info(link);
  }
  else if(link === 'vision'){
    boxChange_info(link);
  }
  else {
    return 0;
  }
});

// businessIntro

//contact
const kakaoAddBtn = document.querySelector ('.kakao-add-btn');
const kakaoChatBtn = document.querySelector ('.kakao-chat-btn');


kakaoAddBtn.addEventListener('click', (e) => {
  Kakao.Channel.addChannel({
    channelPublicId: '_PTSis',
  })
})

kakaoChatBtn.addEventListener('click', (e) => {
  Kakao.Channel.chat({
    channelPublicId: '_PTSis',
  })
})