export default class KakaoAuth {

  loginWithKakao() {
    Kakao.Auth.authorize({
      redirectUri: 'http://127.0.0.1:5500/login.html'
    });

  }

  kakaoLogout() {
    if (!Kakao.Auth.getAccessToken()) {
      alert('아직 로그인이 되지 않았습니다.');
      return 0;
    }
    Kakao.Auth.logout(() => {
      alert('로그아웃이 되었습니다.');
      window.location.reload("http://127.0.0.1:5500");
    })
  }
}
