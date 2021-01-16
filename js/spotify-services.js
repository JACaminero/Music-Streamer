import requestParams from "./modules/global-params.js";

let loginHeaders = {
  'Authorization': 'BQBtqiE3RKPiYHD1jInv2G8oYA9jKqLMqdDJOvOBoUSCAGLu3dNz98JlER4_m69_t2mRkG_4EhBjScUXd9yG2OOsSkz3f0uIp1LgmexYdtxvMMe7KNaRaER5F7JL9z0nVOPlVxRLioUmoQNvYh2vJ00JLkS1pl1Qjn0N',
}

let loginParameters = {
  'client_id': requestParams.clientId,
  'response_type': 'token',
  'redirect_uri': 'http://127.0.0.1:5500/after-login.html'
}

axios.get('https://accounts.spotify.com/authorize', loginParameters, loginHeaders) 
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
