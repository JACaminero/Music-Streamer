let params = {
  'client_id': '4180c1eb36dd4716a7d38f52dd590de1',
  'response_type': 'token',
  'redirect_uri': 'http://127.0.0.1:5500/app.html'
}

var spotifyAuthorizeURL = 
`https://accounts.spotify.com/authorize?client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&response_type=${params.response_type}&scope=user-read-private%20user-read-email`

// window.location.href = spotifyAuthorizeURL
// window.open(spotifyAuthorizeURL)

console.log(window.location.search)