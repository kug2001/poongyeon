export default class KakaoAuth {

  loginWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: 'https://kug2001.github.io/poongyeon/login.html'
    });

  }

  kakaoLogout() {
    if (!Kakao.Auth.getAccessToken()) {
      alert('아직 로그인이 되지 않았습니다.');
      return 0;
    }
    Kakao.Auth.logout(() => {
      alert('로그아웃이 되었습니다.');
      window.location.reload("https://kug2001.github.io/poongyeon/");
    })
  }
}
