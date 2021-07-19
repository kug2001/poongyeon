

const myHeaders = new Headers();
myHeaders.append("Cookie", "_kadu=_sshO5sHiNKoRmbC_1626325443196; _kadub=_sshO5sHiNKoRmbC_1626325443196");

const requestOptions = {
  method: 'POST',
  // headers: myHeaders,
  // redirect: 'follow'
};

const accessCode = window.location.search;

fetch(`https://kauth.kakao.com/oauth/token${accessCode}&grant_type=authorization_code&client_id=b5922d375de091237b1d6a186b9a0692&redirect_uri=https://kug2001.github.io/poongyeon/login.html`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.access_token)
    Kakao.Auth.setAccessToken(result.access_token);
  })
  .then(() => window.location.replace("https://kug2001.github.io/poongyeon/"))