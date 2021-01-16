let headers = {
  'Authorization': 'BQBtqiE3RKPiYHD1jInv2G8oYA9jKqLMqdDJOvOBoUSCAGLu3dNz98JlER4_m69_t2mRkG_4EhBjScUXd9yG2OOsSkz3f0uIp1LgmexYdtxvMMe7KNaRaER5F7JL9z0nVOPlVxRLioUmoQNvYh2vJ00JLkS1pl1Qjn0N' 
}

let params = {
  'client_id': '4180c1eb36dd4716a7d38f52dd590de1',
  'response_type': 'token',
  'redirect_uri': 'http://127.0.0.1:5500/app.html'
}

var spotifyAuthorizeURL = 
`https://accounts.spotify.com/authorize?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&response_type=${params.response_type}&scope=user-read-private%20user-read-email`

window.location.href = spotifyAuthorizeURL
window.open(spotifyAuthorizeURL, '_blank')

console.log(window.location.search)